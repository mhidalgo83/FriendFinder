var friendsArray = require("../data/friends.js");

module.exports = function (app) {

    app.get("/api/friends", function (req, res){
        res.json(friendsArray);
    })

    app.post("/api/friends", function (req, res){

        console.log(req.body["scores[]"]);
        friendsArray.push(req.body);
        res.end();
    })
}