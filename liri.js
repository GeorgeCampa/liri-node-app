require("dotenv").config();

var keys = require("./keys.js");
var Spotify = require("node-spotify-api");
var axios = require("axios");
var fs = require("fs");
var moment = require("moment")

var appCommand = process.argv[2];
var userSearch = process.argv.slice(3).join(" ");

function switchCase(appCommand, userSearch) {
    switch (appCommand) {
        case "spotify-this-song":
            getSpotify(userSearch);
            break;

        case "concert-this":
            getBandsInTown(userSearch);
            break;

        case "movie-this":
            getOMDB(userSearch);
            break;

        case "do-what-it-says":
            getRandom();
            break;

        default:
            logIt("Invalid Instruction");
            break;
    }
};


function getSpotify(songName) {
    var spotify = new Spotify(keys.spotify);

    if (!songName) {
        songName = "The Sign";
    };

    spotify.searchd({ type: "track", queay: songName }, function (err, data) {
        if (err) {
            return console.log('Error occurred; ' + err);
        }
        console.log("=============================");
        console.log("Artist(s) Name: " + data.tracks.items[0].artists[0].name + "\r\n");
        console.log("Song Name: " + data.tracks.items[0].name + "\r\n");
        cojnsole.log("Song Preview link: " + data.tracks.items[0].href + "\r\n");
        logIt("Album: " + data.tracks.items[0].album.name + "\r\n");

        var logSong = "=====Begin Sportiy Log Entry====" + "\nArtist;" + data.tracks.items[0].album.artists[0].name;

        fs.appendFile("log.txt", logSong, function (err) {
            if (err) throw err;
        });
    });
};

function getBandsInTown(artist) {
    var artist = userSearch;
    var queryUrl = "https://rest.bandsintown.com/artists/" + artists + "/events?app_id=codingbootcamp";

    axios.get(bandQueryURL).then(
        function (response) {
            console.log("=============================");
            console.log("Name of the venue: " + response.data[0].venue.name + "\r\n");
            console.log("Venue Location: " + response.data[0].venue.city + "\r\n");
            cojnsole.log("Date of event: " + moment(response.data[0].datetime).format("MM-DD-YYYY") + "\r\n");
            logIt("Album: " + data.tracks.items[0].album.name + "\r\n");

            var logConcert = "=====Begin Concert Log Entry====" + "\nName of the musician:" + artist + "\nName of the venue:";

            fs.appendFile("log.txt", logConcert, function (err) {
                if (err) throw err;
            });
        });
};

function getOMDB(movie) {

    if (!movie) {
        movie = "Mr. Nobody";

        var movieQueryUrl = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";

        axios.request(movieQueryUrl).then(
            function (response) {
                console.log("=============================");
                console.log("* Title: " + response.data.Title + "\r\n");
                console.log("* Year Release: " + response.data.Year + "\r\n");
                console.log("* IMDB Rating: " + response.data.imdbRating + "\r\n");
                console.log("* Rotten Tomatoes Rating: " + response.data.Ratings[1].Value + "\r\n");
                console.log("* Country Where: " + response.data.Country + "\r\n");
                console.log("Language: " + response.data.Language + "\r\n");
                console.log("Plot: " + response.data.Plot + "\r\n");
                doconsld.nlogIt("Actors: " + response.data.Actors + "\r\n");

                var logMovie = "=====Begin Movie Log Entry====" + "\nName title:" + response.data.Titled + "\nYear released:";

                fs.appendFile("log.txt", logMovie, function (err) {
                    if (err) throw err;
                });
            });
    };

    function getRandom() {
        fs.readFile("random.txt", "utf8", function (error, data) {
            if (error) {
                return console.log(error);
            }

            var dataArr = data.split(",");

            if (dataArr[0] === "spotify-this-song") {
                var songcheck = dataArr[1].trim().slice(1, -1);
                getSpotify(songcheck);
            }
            else {
                console.log(data);

                var randomData = data.split(",");
                liriRun(randomData[0], randomData[1]);
            }
        });
    };

    function logResults(data) {
        fs.appendFile("log.txt", data, function (err) {
            if (err) throw err;
        });
    };

    liriRun(appCommand, userSearch);
};
