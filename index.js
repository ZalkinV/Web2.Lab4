const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const favourites = require("./routes/favourites");
const weather = require("./routes/weather");


const APP_URL = "localhost";
const APP_PORT = 3001;

const DB_URL = "localhost";
const DB_PORT = 27017;


const app = express();
app.use(express.json());
app.use(cors());
app.use("/favourites", favourites);
app.use("/weather", weather);


(async function () {
  try {
    await mongoose.connect(`mongodb://${DB_URL}:${DB_PORT}/web2lab4`, {
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

