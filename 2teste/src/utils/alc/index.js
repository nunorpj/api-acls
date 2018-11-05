const Collaborators = require("./collaborators");

module.exports.acl = {

    //add user as collaborator of the client
    addUser: function (userID, clientID) {
        let colab = new Collaborators({
            userID,
            clientID,
            permissions: ["GET", "POST", "PUT", "DELETE"],
        })
        return colab.save()
    },

    //remove user as collaborator of the client
    removeUser: function (userID, clientID) {
        Collaborators.findOneAndRemove({
            userID,
            clientID
        }).catch(err => {
            console.log(err)
        })

    },

    //check if an user is an colaborator of the client
    checkAccess: function (req, res, next) {

        Collaborators.findOne({
            userID: req.authData.playload,
            clientID: req.body.clientID
        }).then(colab => {
            if (colab.permissions.indexOf(req.method) == -1) {
                res.status(403).send("Access Denied");
            } else {
                next();
            }

        }).catch(err => {
            res.status(500).send(err)
        })
    },

    //change the user permissions = ["GET","POST","PUT","DELETE"] 
    changePermissions: function (userID, clientID, permissions) {
        Collaborators.findOne({
            userID,
            clientID
        }).then(colab => {
            colab.permissions = permissions;
            colab.save()
                .then(res.send("permissions updated"))
                .catch(err=>res.status(500).send(err))
            })
            .catch(err=>res.status(500).send(err))
        },

}