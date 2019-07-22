exports.spotify = {
  id: 215dde8c54f44d9dbca3ab476a184415,
  secret: 4f8e4c135e4c45a2a6a37ddf420f820d
};

spotify.search({ type: 'track', query: 'All the Small Things' }, function (err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }

  console.log(data);
});