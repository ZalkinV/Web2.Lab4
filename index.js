const express = require("express");
const mongoose = require("mongoose");

const PORT = 3000;
const HOST_NAME = "localhost";

const app = express();


(async function() {
    try {
        await mongoose.connect("", {
            useNewUrlParser: true,
            useFindAndModify: false
        });

        app.listen(PORT, () => {
            console.log(`Server has been started at http://${HOST_NAME}:${PORT}`);
        });
    } catch (e) {
        console.error(e.message);
    }
})();

