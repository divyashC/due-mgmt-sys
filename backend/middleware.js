const jwt = require("jsonwebtoken");
const { JWT_SECRET } = process.env;

// Middleware to verify JWT token
const verifyToken = (req, res, next) => {
	const token = req.header("Authorization");

	if (!token) {
		return res.status(401).json({ message: "Authorization token is missing" });
	}

	try {
		const decoded = jwt.verify(token, JWT_SECRET);
		req.user = decoded.user; // Attach user information to the request
		next(); // Proceed to the next middleware or route handler
	} catch (error) {
		console.error(error);
		return res.status(401).json({ message: "Invalid token" });
	}
};

module.exports = { verifyToken };
