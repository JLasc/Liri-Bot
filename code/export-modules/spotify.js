require("dotenv").config();
var Spotify = require('node-spotify-api');
var keys = require("./keys");
var spotify = new Spotify(keys.spotify)
var colors = require("colors");

module.exports = {
    getSong: function(query) {
        spotify
        .request(`https://api.spotify.com/v1/search?q=${query}&type=track&limit=5`)
        .then(function(data) {
        
        var dataLength = data.tracks.items.length

        
        
        console.log(colors.yellow(`Results: ${dataLength}`))
        for (var i=0; i < dataLength; i++){

            var dataItem = data.tracks.items[i]
          
          var artists = dataItem.album.artists[0].name; // Name of Artist
          var songName = dataItem.name; // Name of Song
          var albumName = dataItem.album.name; // Name of the Album
          var prvLink = dataItem.preview_url; // Preview Link

          //Switch in the event there is no previewlink
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
}




