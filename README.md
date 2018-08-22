# Liri Node Bot

## Installation

1. Clone repo to your hard drive. `git clone git@github.com:JLasc/liri-node-app.git`

2. Using a terminal, navigate to the cloned repo on your computer. Inside the `code`
folder. Run `npm install` to install package.json. 

3. Once this has finished, `cd ..` into the main liri-node-app folder, and in terminal run the command `vagrant up` (This will require you to have Viritual Box and Vagrant installed) Please note: The first time running this command may take up to ten minutes to start the environment.

4. When the VM is powered up, run the command `vagrant ssh` and then `cd /var/code` to navigate to the directory where the bot lives. 

5. This application requires an additional `.env` file for spotify. Please navigate to `spotify's developer dashboard` to generate your id and secret. This is required to access their database. Once you have this infomration, create a file in the `/var/code` directory and add the following lines:

    ```
    # Spotify API keys

     SPOTIFY_ID=[your id here]

     SPOTIFY_SECRET=[your secret here]
     ```


6. Thereafter you can type commands such as: `node liri.js spotify-this-song [song name]` to have the bot retreive information. See below for more commands.

## Usage
The aim of this bot is to showcase using Node to talk to back end servers to retrieve information from three API's. 

Command List:

- `spotify-this-song [song name]` This command will return to you the first 5 entries that closley match the song name utilizing the Spotify API. This command returns the following:
    - Artist(s)
    - Song Name
    - Preview Link
    - Album the song is from.

- `concert-this [artist/band name]` This command will return up to 10 concert listings for your desired artists utilizing BandsInTown API. This command returns the following:
    - Name of the venue
    - Venue Location
    - Date of the event


- `movie-this [movie name]` This command will return your specified movie utilizing the OMDB API. This command will return the following:

    - Title of the movie
    - Year
    - IMDB Rating
    - Rotten Tomatos Rating
    - Country
    - Language
    - Plot
    - Actors

- `do-what-it-says` This command will read the `random.txt` document and convert it's string value into a command. The default is set to spotify-this-song,"I Want It That Way". You can manipulate this to bring up different commands.


## Credits
[Spotify Dashboard](https://developer.spotify.com/dashboard/login)

[Bands In Town API](http://www.artists.bandsintown.com/bandsintown-api)

[OMDB Api](http://www.omdbapi.com/)

