// Initialize users with hashed passwords
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("./models/User");

// Your user data array
const usersData = [
	{
		fullName: "Divyash Chhetri",
		email: "02200174.cst@rub.edu.bt",
		phoneNo: "17358766",
		department: "Information Technology Department",
		userType: "Student",
		role: "Year 4 - Sem 7",
		password: "Cst@12345", // You should hash this password
	},
	{
		fullName: "Karma Chophel",
		email: "karmachophel.cst@rub.edu.bt",
		phoneNo: "17171717",
		department: "Science & Humanities Department",
		userType: "Staff",
		role: "Physics Lab Incharge",
		password: "Cst@12345", // You should hash this password
	},
	{
		fullName: "Passang Dema",
		email: "passangdema.cst@rub.edu.bt",
		phoneNo: "17171717",
		department: "Administration Department",
		userType: "Admin",
		role: "Adm Assistant",
		password: "Cst@12345", // You should hash this password
	},
	{
		fullName: "Jiwan Gurung",
		email: "jeewangurung.cst@rub.edu.bt",
		phoneNo: "17171717",
		department: "ICT Department",
		userType: "ICT",
		role: "ICT Officer",
		password: "Cst@12345", // You should hash this password
	},
];

// Connect to MongoDB (same as in your server.js)
mongoose.connect(
	"mongodb+srv://divyashc:DMS-2023@duemanagementsystem.d4irase.mongodb.net/?retryWrites=true&w=majority",
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
	}
);

// Function to create and save users
const createAndSaveUsers = async () => {
	try {
		const saltRounds = 10; // You can adjust this value for security
		const hashedUsers = await Promise.all(
			usersData.map(async (userData) => {
				// Hash the password before saving it to the database
				const hashedPassword = await bcrypt.hash(userData.password, saltRounds);
				// Create a new user with hashed password
				const newUser = new User({
					fullName: userData.fullName,
					email: userData.email,
					phoneNo: userData.phoneNo,
					department: userData.department,
					userType: userData.userType,
					role: userData.role,
					password: hashedPassword, // Store the hashed password
				});
				// Save the user to the database
				return newUser.save();
			})
		);
		console.log("Users created and saved:", hashedUsers);
	} catch (error) {
		console.error("Error creating users:", error);
	} finally {
		mongoose.connection.close(); // Close the database connection
	}
};

// Call the function to create and save users
createAndSaveUsers();
