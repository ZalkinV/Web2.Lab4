const { Schema, model } = require("mongoose");

const favouriteSchema = new Schema({
    cityName: {
        type: String,
        required: true,
    },
});

module.exports = model("Favourite", favouriteSchema);
