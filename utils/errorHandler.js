const errorHandler = (err, req, res, next) => {
  // Default error status and message
  let statusCode = 500;
  let message = "Internal Server Error";

  // Custom error handling based on error types
  if (err.name === "ValidationError") {
    // Mongoose validation error
    statusCode = 400;
    message = err.message;
  } else if (err.name === "UnauthorizedError") {
    // JWT authentication error
    statusCode = 401;
    message = "Unauthorized";
  }

  // Log the error
  console.error(err);

  // Send the error response
  res.status(statusCode).json({ error: message });
};

module.exports = errorHandler;
