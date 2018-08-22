var request = require("request")
var colors = require("colors");

module.exports = {
    omdb: function (query) {
        request(`http://www.omdbapi.com/?t=${query}&plot=short&apikey=trilogy`, function (err, response, body) {
            if (err) {
                return console.log(err)
            }

            var data = JSON.parse(body);
            var movieName = data.Title //Movie Name
            var movieRelease = data.Released //Movie Release Date
            var imdbRating = data.imdbRating //IMDB rating 
            var rottenRating = data.Ratings[1].Value; //Rotten Tomatos Rating
            var country = data.Country //Country Produced
            var movieLang = data.Language // Movie Language
            var moviePlot = data.Plot // Movie Plot
            var movieActors = data.Actors // Movie Actors
            var movieInfo = `\n
    ------------------------------------------        
    Movie Name: ${colors.red(movieName)}\n
    Release Date: ${colors.red(movieRelease)}\n
    IMDB Rating: ${colors.red(imdbRating)}\n
    Rotten Rating: ${colors.red(rottenRating)}\n
    Country: ${colors.red(country)}\n
    Laungage: ${colors.red(movieLang)}\n
    Plot/Synopsis: \n${colors.red(moviePlot)}\n
    Acots: ${colors.red(movieActors)}\n
    ------------------------------------------
    `
            console.log(movieInfo)
        });
    }
}