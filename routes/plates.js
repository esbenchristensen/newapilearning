const express = require("express");
const router = express.Router();

const Plate = require("../models/plateModel");

// Routes

// Get all plates from database
router.get("/", (req, res) => {
    Plate.find({}, (err, allPlates) => {
        if (err) {
            console.log(err);
        } else {
            res.send(allPlates);
        }
    });
});

// Get plate by plate number
router.get("/:plate", (req, res) => {
    Plate.find({ plate: req.params.plate }, (err, plate) => {
        if (err) {
            console.log(err);
        } else {
            res.send(plate);
        }
    });
});

// Add new plate to database
router.post("/", async (req, res) => {
    // Add new plate to database
    try {
        // Create new plate
        const plate = await Plate.create(req.body);
        // Send response
        res.status(201).json({
            status: "success",
            data: { plate }, // shorthand for plate: plate
        });
    } catch (error) {
        //error
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
});

module.exports = router;
