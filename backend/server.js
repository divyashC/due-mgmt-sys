const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const uri =
	"mongodb+srv://divyashc:DMS-2023@duemanagementsystem.d4irase.mongodb.net/?retryWrites=true&w=majority";

const app = express();

app.use(cors());
app.use(express.json());

async function connect() {
	try {
		await mongoose.connect(uri);
		console.log("Connected to MongoDB");
	} catch (error) {
		console.error(error);
	}
}

connect();

app.listen(8000, () => {
	console.log("Server has started on port 8000");
});
