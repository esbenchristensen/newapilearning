const mongoose = require("mongoose");

const plateSchema = new mongoose.Schema({
    plate: {
        type: String,
        required: [true, "Please enter plate"],
    },
    dateAndTime: {
        type: String,
        required: [true, "Please enter date and time"],
    },
    lat: {
        type: String,
        required: [true, "Please enter latitude"],
    },
    lon: {
        type: String,
        required: [true, "Please enter longtitude"],
    },
    plateImg: {
        type: String,
        required: [true, "Please enter link to plate image"],
    },
    carImg: {
        type: String,
        required: [true, "Please enter car image"],
    },
});

const Plate = mongoose.model("Plate", plateSchema);

module.exports = Plate;
