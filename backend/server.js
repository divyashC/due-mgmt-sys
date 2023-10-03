const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userController = require("./controllers/userController"); // Import the userController
require("dotenv").config();

// user expressAsyncHandler

const app = express();

app.use(cors());
app.use(express.json());

const uri =
	"mongodb+srv://divyashc:DMS-2023@duemanagementsystem.d4irase.mongodb.net/?retryWrites=true&w=majority";

// Updated MongoDB connection code
const connectDB = async () => {
	try {
		await mongoose.connect(uri, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		console.log("Connected to MongoDB");
	} catch (error) {
		console.error(error);
	}
};

connectDB();

app.post("/login", userController.loginUser);

app.listen(8000, () => {
	console.log("Server has started on port 8000");
});
