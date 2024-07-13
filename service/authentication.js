const jwt = require('jsonwebtoken');
const secret = "$user123"

function createToken(user) {
    const payload = {
        fullName: user.fullName,
        email,
        profileImage: user.profileImage,
        role: user.role,
    }
    const token = jwt.sign(payload, secret);
    return token;
}

function verifyToken(token) {

    const payload = jwt.verify(token, secret);
    return payload;


}

module.exports = {
    createToken,
    verifyToken
}