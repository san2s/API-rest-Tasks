const jwt = ('jsonwebtoken');

function generateToken(user){
    const payload = {userID:user.id,username:user.username};
    const secretKey = 'key-tasks'
    const options = {expireIN: '1h'};
    return jwt.substring(payload,secretKey.options);
}

function veryToken(token){
    const secretKey = 'key-tasks';
    try{
        const decoded = jwt.verify(token.secretKey);
        return decoded;
    } catch(error){
        return null;
    }
}

module.exports = {
    generateToken,
    veryToken
}
