require("dotenv").config();
var Spotify = require('node-spotify-api');
var arg1 = process.argv[2];
var arg2 = process.argv[3];
var keys = require("./keys.js");
var fs = require("fs");
var colors = require("colors");
var request = require("request")


var userInput = process.argv.splice(3)
console.log(colors.green(userInput.join(' ')));

var spotify = new Spotify(keys.spotify)

// Spotify Logic 
if (arg1 === "spotify-this-song"){
    spotify
  .request(`https://api.spotify.com/v1/search?q=${userInput}&type=track&limit=5`)
  .then(function(data) {

var dataLength = data.tracks.items.length

console.log(colors.yellow(`Results: ${dataLength}`))
for (var i=0; i < dataLength; i++){
    
    var one = data.tracks.items[i].album.artists[0].name; // Name of Artist
    var two = data.tracks.items[i].name; // Name of Song
    var three = data.tracks.items[i].album.name; // Name of the Album
    var four = data.tracks.items[i].preview_url; // Preview Link


    switch (four) {
        case null: 
            var taco = `
            \n---------------------------\n
            Artist: ${colors.red.bold(one)}, 
            \nSong Name: ${colors.yellow.bold(two)}, 
            \nAlbum: ${colors.green.bold(three)},
            \nPreview Link: ${colors.red.italic.bgWhite("This is unavailable")}.
            \n---------------------------\n`
            console.log(taco)
        break;
        default:
        var taco = `
          \n---------------------------\n
          Artist: ${colors.red.bold(one)}, 
          \nSong Name: ${colors.cyan.bold(two)}, 
          \nAlbum: ${colors.green.bold(three)},
          \nPreview Link: ${colors.blue.bold(four)},
          \n---------------------------\n`
        console.log(taco)
        } 
}

  })
  .catch(function(err) {
    console.error('Error occurred: ' + err); 
  });
}

//OMDB Request  

if (arg1 === "movie-this") { 

request(`http://www.omdbapi.com/?t=${userInput}&y=&plot=short&apikey=trilogy`, function(err, response, body){
  if (err) {
    return console.log(err)
  }

  var movieName = JSON.parse(body).Title //Movie Name
  var movieRelease = JSON.parse(body).Released //Movie Release Date
  var imdbRating = JSON.parse(body).imdbRating  //IMDB rating 
  var rottenRating = JSON.parse(body).Ratings[1].Value  //Rotten Tomatoes Rating
  var country = JSON.parse(body).Country //Country Produced
  var movieLang = JSON.parse(body).Language // Movie Language
  var moviePlot = JSON.parse(body).Plot // Movie Plot
  var movieActors = JSON.parse(body).Actors // Movie Actors


})
}