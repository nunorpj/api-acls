const mongoose = require("mongoose");
mongoose.connect(
    "mongodb://localhost:27017/Base", {
        useNewUrlParser: true
    }
);
mongoose.connection
    .once("open", () => console.log("connected to db"))
    .on("error", err => {
        console.log(`could not connect to db`, err);
    });