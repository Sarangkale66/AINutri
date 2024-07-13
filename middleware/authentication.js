const { verifyToken } = require('../service/authentication');

function cookieAuthentication(cookieName) {
    return (req, res, next) => {
        const tokenValue = req.cookies[cookieName];
        if (!tokenValue) {
            return next();
        }

        try {
            const userpayload = verifyToken(tokenValue);
            req.user = userpayload;
        } catch (error) {

        }
        return next();
    }
}

module.exports ={
    cookieAuthentication,
}
