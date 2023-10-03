const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

// Function to create a new user
exports.createUser = async (req, res) => {
	try {
		// Extract user data from the request body
		const { email, password } = req.body;

		// Check if the user already exists
		const existingUser = await User.findOne({ email });
		if (existingUser) {
			return res.status(400).json({ error: "User already exists" });
		}

		// Hash the password before saving it to the database
		const hashedPassword = await bcrypt.hash(password, 10);

		// Create a new user
		const newUser = new User({
			email,
			password: hashedPassword,
		});

		// Save the new user to the database
		await newUser.save();

		// Respond with a success message or user data as needed
		res.status(201).json({ message: "User created successfully" });
	} catch (error) {
		// Handle errors, e.g., duplicate email, validation errors, etc.
		res.status(400).json({ error: "Failed to create user" });
	}
};

exports.loginUser = async (req, res) => {
	try {
		const { email, password } = req.body;

		// Find the user by email
		const user = await User.findOne({ email });

		if (!user) {
			return res
				.status(401)
				.json({ error: "Authentication failed: User not found" });
		}

		// Compare the provided password with the hashed password in the database
		const passwordMatch = await bcrypt.compare(password, user.password);

		if (!passwordMatch) {
			return res
				.status(401)
				.json({ error: "Authentication failed: Incorrect password" });
		}

		// If credentials are correct, generate a JWT token
		const token = jwt.sign(
			{
				userId: user._id,
				email: user.email, // Add user details here
				fullName: user.fullName,
				phoneNo: user.phoneNo,
				department: user.department,
				userType: user.userType,
				role: user.role,
			},
			process.env.JWT_SECRET,
			{
				expiresIn: "1h", // Token expiration time (adjust as needed)
			}
		);

		// Send the token and user details as a response
		res.status(200).json({
			token,
			fullName: user.fullName,
			email: user.email,
			phoneNo: user.phoneNo,
			department: user.department,
			userType: user.userType,
			role: user.role,
		});
	} catch (error) {
		// Log the error to the console
		console.error(error);

		// Send a generic error message to the client
		res.status(500).json({ error: "Internal server error" });
	}
};
