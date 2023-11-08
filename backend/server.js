const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userController = require("./controllers/userController"); // Import the userController
const duesController = require("./controllers/dueController"); // Import the dueController
const restoredController = require("./controllers/restoredController"); // Import the restoredController
const dataSummaryController = require("./controllers/dataSummaryController"); // Import the dataSummaryController
const graphDataController = require("./controllers/graphDataController"); // Import the graphDataController
const updateDueStatusController = require("./controllers/updateDueStatus");
const updateRestoredStatusController = require("./controllers/updateRestoreStatus");
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

// Routes for users
app.post("/login", userController.loginUser);
app.get("/getUsers", userController.getAllUsers);
// app.post("/addUser", userController.insertUser);
app.post("/addUserfromCSV", userController.addUserfromCSV);

// Routes for dues
app.post("/insertDues", duesController.insertDue);
app.get("/getDues", duesController.getAllDues);
app.get("/getDueByStudentNo/:stdNo", duesController.getDueByStudentNo);

// Routes for restored items
app.post("/insertRestoredItem", restoredController.insertRestoredItem);
app.get("/getAllRestoredItems", restoredController.getAllRestoredItems);

// Routes for data summary
app.get("/datasummary", async (req, res) => {
	try {
		const amountCollected =
			await dataSummaryController.calculateAmountCollected();
		const amountDue = await dataSummaryController.calculateAmountDue();
		const itemsDamaged = await dataSummaryController.calculateItemsDamaged();
		const studentsWithDues =
			await dataSummaryController.calculateStudentsWithDues();

		res.json({
			amountCollected,
			amountDue,
			itemsDamaged,
			studentsWithDues,
		});
	} catch (error) {
		console.error("Error getting data summary: ", error);
		res.status(500).json({ error: "Internal server error" });
	}
});

// Routes for graphs data
app.get("/labNames", graphDataController.getLabNames);
app.get("/labAmount/:labName", graphDataController.getLabAmount);
app.get("/labItemsDamaged/:labName", graphDataController.getLabItemsDamaged);
app.get(
	"/amountCollectedPerMonth",
	graphDataController.getAmountCollectedPerMonth
);
app.get("/amountDuePerMonth", graphDataController.getAmountDuePerMonth);
app.get("/getAllLabAmount", graphDataController.getAllLabAmount);
app.get("/getAlllabDues", graphDataController.getAllLabDues);
app.get("/getAllLabItemsDamaged", graphDataController.getAllLabItemsDamaged);
app.get("/itemsDamagedPerMonth", graphDataController.getItemsDamagedPerMonth);
app.get(
	"/getItemsRestoredPerMonth",
	graphDataController.getItemsRestoredPerMonth
);
app.get("/getDueAmountInLab", graphDataController.getDueAmountInLab);

// Routes for updateDueStatus
app.put("/updateDues/:_id", updateDueStatusController.updateDuesStatus);

// Routes for updateRestoreStatus
app.put(
	"/updateRestored/:_id",
	updateRestoredStatusController.updateRestoredStatus
);

app.listen(8000, () => {
	console.log("Server has started on port 8000");
});
