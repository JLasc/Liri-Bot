var request = require("request")
var moment = require("moment")
var colors = require("colors")

module.exports = {
    bandRequest: function (query) {

        request(`https://rest.bandsintown.com/artists/${query}/events?app_id=codingbootcamp`, function (err, response, body) {
            if (err) {
                console.log("This is unavailable")
            }

            

            artistData = JSON.parse(body)
            if (artistData.length > 0) {
                for (i = 0; i < 10; i++) {
                    var venueName = artistData[i].venue.name;
                    var venueCity = artistData[i].venue.city;
                    var venueCountry = artistData[i].venue.country;
                    var venueLocation = `${venueCity}, ${venueCountry}`
        
                    var eventTime = artistData[i].datetime.split("T")
                    var dateFormat = moment(eventTime[0], "YYYY-MM-DD").format("MM-DD-YYYY")
                    var timeFormat = moment(eventTime[1], "k:mm A").format("h:mm A")
                    var venueDateTime = `${dateFormat}, ${timeFormat}`;
                    eventInfo = 
            `             
            Venue Name: ${colors.yellow(venueName)} \n
            Location: ${colors.yellow(venueLocation)} \n
            Date/Time: ${colors.yellow(venueDateTime)} 
            -------------------------------\n`
                    console.log(eventInfo)
                }
            } else {
                console.log(colors.red("**This artist has no venue dates**"))
            }



/*          */
        })
    }


}