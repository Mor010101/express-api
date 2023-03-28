const { ValidationError, DatabaseError } = require('sequelize');

module.exports = (error, req, res, next) => {
  if (error instanceof ValidationError) {
    res.status(400).json({
      message: 'Validation error',
      errors: error.errors.map((err) => ({
        field: err.path,
        message: err.message,
      })),
    });
  } else if (error instanceof DatabaseError) {
    res.status(500).json({
      message: 'Database error',
      error: error.message,
    });
  } else {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });

}
next();
};
