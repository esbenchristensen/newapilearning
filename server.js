const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Plate = require("./models/plateModel");
const app = express();
const port = 3000;
dotenv.config();

app.use(express.json());

// Routes
const plateRouter = require("./routes/plates");
app.use("/plate", plateRouter);

// Connect to MongoDB and start server
mongoose
    .connect(process.env.MONGODB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Connected to Database");
        app.listen(port, () => console.log(`PlateTracker API listening on port ${port}!`));
    })
    .catch((err) => console.log(err));
