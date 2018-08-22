//Argument Variables
var arg1 = process.argv[2];
var userInput = process.argv.splice(3); //Combines the rest of the argv array starting at index 2


//Modules
var spotifyRequest = require("./export-modules/spotify");
var omdbRequest = require("./export-modules/omdb");
var doWhat = require("./export-modules/do-what");
var bands = require("./export-modules/bands");


switch (arg1) {
  case "spotify-this-song":
  spotifyRequest.getSong(userInput);
  break;
  case "movie-this":
  omdbRequest.omdb(userInput);
  break;
  case "concert-this":
  artist = userInput.join("+")
  bands.bandRequest(artist);
  break;
  case "do-what-it-says":
  doWhat.search()
  break;
  case "help":
  console.log(`\nPlease enter a command to get started:
  - spotify-this-song [song name]
  - movie-this [movie name]
  - concert-this [artist name]
  - do-what-it-says 
  `)
}