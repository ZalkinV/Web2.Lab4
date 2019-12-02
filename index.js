const express = require("express");
const mongoose = require("mongoose");

const APP_URL = "localhost";
const APP_PORT = 3000;

const DB_URL = "localhost";
const DB_PORT = 27017;


const app = express();


(async function() {
    try {
        await mongoose.connect(`mongodb://${DB_URL}:${DB_PORT}`, {
            useNewUrlParser: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        });

        app.listen(APP_PORT, () => {
            console.log(`Server has been started at http://${APP_URL}:${APP_PORT}`);
        });
    } catch (e) {
        console.error(e.message);
    }
})();

