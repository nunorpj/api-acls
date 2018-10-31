const bodyParser = require("body-parser");
const userRoute = require("./user")
const clientRoute = require("./client")
const EquipmentRoute = require("./equipment")

module.exports = function (app) {
    
    app.use(bodyParser.json());
    app.use(
        bodyParser.urlencoded({
            extended: true
        })
    );
    

   app.use("/", userRoute);
   app.use("/", clientRoute);
   app.use("/",EquipmentRoute)

};
