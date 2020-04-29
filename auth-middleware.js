/**
 * Only exec next if user authentication is correctly
 */
module.exports = (req, res, next) => {
    console.log('ip:', req.ip);
    next();
}