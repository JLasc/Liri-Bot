//Argument Variables
var arg1 = process.argv[2];
var userInput = process.argv.splice(3); //Combines the rest of the argv array starting at index 2


//Modules
var spotifyRequest = require("./export-modules/spotify");
var omdbRequest = require("./export-modules/omdb");
var doWhat = require("./export-modules/do-what");
var bands = require("./export-modules/bands");

// Spotify Logic 
if (arg1 === "spotify-this-song"){
  spotifyRequest.getSong(userInput) 
}

//OMDB Request Logic 
if (arg1 === "movie-this") { 
  omdbRequest.omdb(userInput)
}


//Bands In Town Logic
if (arg1 === "concert-this") {
  artist = userInput.join("+")
  bands.bandRequest(artist)
}


//Do What It Says Logic
if(arg1 === "do-what-it-says"){
  doWhat.search()
}

if (arg1 === "help") {
  console.log(``)
}