const User = require("../db/models/user")
const jwt = require("jsonwebtoken");

function registry(req, res) {

    let newUser = new User({
        email: req.body.email,
        name: req.body.name,
        password: req.body.password,
    })

    newUser.save().then(user => {
        res.send("success")
    }).catch(err => {
        res.status(400).send(err)
    })
}




function login(req, res) {
    User.findOne({
        email: req.body.email,
    }).then(user => {
            if (user.password != req.body.password) {
                res.status(400).send("Invalid password")
                return
            } else {
                let playload = user._id;
                jwt.sign({
                        playload
                    },
                    "shhhhhhhhhh",
                    (err, token) => {
                        
                        if(err){
                            console.log(err)
                            res.status(500).send(err)
                        }

                        res.json({
                            message: "loged in",
                            token,
                            name: user.name
                        });
                    }
                );
            }
    });
}



module.exports.registry = registry;
module.exports.login=login;