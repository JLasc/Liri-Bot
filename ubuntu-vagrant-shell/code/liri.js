require("dotenv").config();
var Spotify = require('node-spotify-api');
var arg1 = process.argv[2];
var arg2 = process.argv[3];
var keys = require("./keys.js");
var fs = require("fs");
var colors = require("colors");
var request = require("request")



//Combines the rest of the argv array starting at index 2
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
    
    var artists = data.tracks.items[i].album.artists[0].name; // Name of Artist
    var songName = data.tracks.items[i].name; // Name of Song
    var albumName = data.tracks.items[i].album.name; // Name of the Album
    var prvLink = data.tracks.items[i].preview_url; // Preview Link


    switch (prvLink) {
        case null: 
            var songPreview = `
            \n
            ---------------------------
            \nArtist: ${colors.red.bold(artists)}, 
            \nSong Name: ${colors.yellow.bold(songName)}, 
            \nAlbum: ${colors.green.bold(albumName)},
            \nPreview Link: ${colors.red.italic.bgWhite("This is unavailable")}.\n
            ---------------------------\n`
            console.log(songPreview)
        break;
        default:
        var songPreview = `
          \n---------------------------
          \nArtist: ${colors.red.bold(artists)}, 
          \nSong Name: ${colors.cyan.bold(songName)}, 
          \nAlbum: ${colors.green.bold(albumName)},
          \nPreview Link: ${colors.blue.bold(prvLink)},
          \n---------------------------
          \n`
        console.log(songPreview)
        } 
}

  })
  .catch(function(err) {
    console.error('Error occurred: ' + err); 
  });
}

//OMDB Request Logic 

if (arg1 === "movie-this") { 

request(`http://www.omdbapi.com/?t=${userInput}&plot=short&apikey=trilogy`, function(err, response, body){
  if (err) {
    return console.log(err)
  }
  

  var movieName = JSON.parse(body).Title //Movie Name
  var movieRelease = JSON.parse(body).Released //Movie Release Date
  var imdbRating = JSON.parse(body).imdbRating  //IMDB rating 
  var rottenRating = JSON.parse(body).Ratings[1].Value; //Rotten Tomatos Rating
  var country = JSON.parse(body).Country //Country Produced
  var movieLang = JSON.parse(body).Language // Movie Language
  var moviePlot = JSON.parse(body).Plot // Movie Plot
  var movieActors = JSON.parse(body).Actors // Movie Actors

  var movieInfo = `
  \n
  ---------------------------
  Movie Name: ${colors.red(movieName)}\n
  Release Date: ${colors.red(movieRelease)}\n
  IMDB Rating: ${colors.red(imdbRating)}\n
  Rotten Rating: ${colors.red(rottenRating)}\n
  Country: ${colors.red(country)}\n
  Laungage: ${colors.red(movieLang)}\n
  Plot/Synopsis: ${colors.red(moviePlot)}\n
  Acots: ${colors.red(movieActors)}\n
  ---------------------------\n
  `

console.log(movieInfo)
});
}


if(arg1 === "do-what-it-says"){
  fs.readFile("random.txt", "utf8", function(err, data) {
    if (err) {console.log(err)}

    console.log(`node liri.js ${data}`)
  })
}