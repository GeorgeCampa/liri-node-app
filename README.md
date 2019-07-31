# liri-node-app
LIRI is a Language Interpretation and Recognition Interface command line node app that takes in parameters and gives you back data.

"liri spotify-this-song 'songname'" retrieves the following from the Spotify API:
<img width="939" alt="Screen Shot 2019-07-30 at 5 19 37 PM" src="https://user-images.githubusercontent.com/49299319/62252199-fce01e00-b3a6-11e9-94f8-c34ee92ac687.png">

The artist
Song name
Album
Song preview -- If no song name is requested, Liri will retrieve 'The Sign' by Ace of Base


"liri movie-this 'moviename'" retrieves the following from the OMDB API:

<img width="1263" alt="Screen Shot 2019-07-31 at 3 51 31 PM" src="https://user-images.githubusercontent.com/49299319/62254404-d2459380-b3ad-11e9-9c5e-7c316ab99fc2.png">

Title of the movie
Year the movie came out
IMDB Rating of the movie
Rotten Tomatoes Rating of the movie
Country where the movie was produced
Language of the movie
Plot of the movie
Actors in the movie -- If no movie name is requested, Liri will retrieve 'Mr. Nobody'
"liri do-what-it-says" uses the fs Node package to take the text inside of random.txt and run "spotify-this-song".

Liri also outputs and appends each command response to a .txt file called log.txt.



