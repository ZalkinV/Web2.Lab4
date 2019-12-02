const express = require("express");

const PORT = 3000;
const HOST_NAME = "localhost";

const app = express();
app.listen(PORT, () => {
    console.log(`Server has been started at http://${HOST_NAME}:${PORT}`);
});

