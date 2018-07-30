var friendsArray = require("../data/friends.js");

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friendsArray);
    })

    app.post("/api/friends", function (req, res) {

        var data = req.body;

        for (var i = 0; i < data.scores.length; i++) {
            data.scores[i] = parseInt(data.scores[i]);
        }

        var friendIndex = 0;
        var minDiff = 40;

        for (var i = 0; i < friendsArray.length; i++) {
            var totalDifference = 0;
            for (var j = 0; j < friendsArray[i].scores.length; j++) {
                var difference = Math.abs(data.scores[j] - friendsArray[i].scores[j]);
                totalDifference += difference;
            }
            if(totalDifference < minDiff) {
                friendIndex = i;
                minDiff = totalDifference;
              }
            }


        friendsArray.push(data);
        console.log(friendsArray[friendIndex]);
        res.json(friendsArray[friendIndex]);
    })
}                                                                                                                                                                                                                                                                                                  