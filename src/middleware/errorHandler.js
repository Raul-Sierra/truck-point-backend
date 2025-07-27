const errorHandler = (err, req, res, next) => {
    // Si el codi d'estat ja és un error, el mantenim. Si no, el posem a 500 (Internal Server Error).
    const statusCode = res.statusCode < 400 ? 500 : res.statusCode;

    res.status(statusCode).json({
        message: err.message,
        stack: process.env.NODE_ENV === 'development' ? err.stack : '🥞',
    });
};

module.exports = { errorHandler };