const express = require("express")
const app = express();
require("./src/routes/index.js")(app);
require("./src/db/index")



app.listen(8000, err => {

    console.log("Runing on port " + 8000);
}).on('error', err => {
    console.log(err)
})