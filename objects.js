var playlist = { jasonMraz: 'Have It All'}

function updatePlaylist(playlist, artist, song){
  Object.assign({}, artist, song)
  return playlist
}