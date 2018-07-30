var friendsArray = require("../data/friends.js");

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friendsArray);
    })

    app.post("/api/friends", function (req, res) {
        
        var data = req.body;
        //Comparison algorithm goes here.

        //Loop through the data scores and convert the array from strings to numbers.

        //Loop through both arrays, subtract the arrays from each other, get the absolute value using Math.abs(), and compare each of them.

        //The lowest number will correspond the friend in friends.js, and then send that data using res.json(friend) back to survey.html

        //Use that data to generate a modal with the friend name and picture
        friendsArray.push(data);
        res.end();
    })
}                                                                                                                                                                                                                                                                                                  