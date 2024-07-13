const { createHmac, randomBytes } = require('crypto')
const mongoose = require('mongoose');
const { createToken } = require('../service/authentication');

mongoose.connect('mongodb://127.0.0.1:27017/AINutri').then(() => console.log('connected mongodeDB'));

const userSchema = mongoose.Schema({
    fullName: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
        unique: true,
    },
    salt: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    profileImage: {
        type: String,
        default: "",
    },
    role: {
        type: String,
        default: ["USER"],
        enum: ["USER", "ADMIN"]
    },
    DOB: {
        type: String,
        require: true
    },
    mobileNO: {
        type: Number,
        require: true
    },
    height: {
        type: Number,
        require: true
    },
    weight: {
        type: Number,
        require: true
    },
    disability: {
        type: String,
        require: true
    },
    bloodGroup: {
        type: String,
        require: true
    }

}, {
    timestamps: true,
});

userSchema.pre('save', function (next) {
    const user = this;

    const salt = randomBytes(16).toString();
    const hashPassword = createHmac('sha256', salt)
        .update(user.password)
        .digest('hex');
    this.salt = salt;
    this.password = hashPassword;
    next();
})
userSchema.static('MatchPassword', async function (email, password) {


    const user = await User.findOne({ email: email });
    if (!user) return new Error("User is Not Found");

    const salt = user.salt;
    const hashPassword = user.password;
    const userHash = createHmac('sha256', salt).update(password).digest('hex');

    if (hashPassword !== userHash) return new Error("Password mismatch");

    const token = createToken(user);
    return token;
})


const User = mongoose.model("user", userSchema);

module.exports = User;