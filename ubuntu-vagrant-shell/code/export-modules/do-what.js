spotifyRequest = require("./spotify")
omdbRequest = require("./omdb")

var fs = require("fs");


module.exports = {
    search: function () {
        fs.readFile("random.txt", "utf8", function (err, data) {
            if (err) {
                console.log(err)
            }

            var newData = data.split(",")

            var command = newData[0]
            var request = newData[1]

            switch (command) {
                case "spotify-this-song":
                    spotifyRequest.getSong(request)
                    break;
                case "movie-this":
                    omdbRequest.omdb(request)
                    break;
                default:
                    return
            }
        })
    }
}