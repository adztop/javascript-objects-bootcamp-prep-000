var playlist = { jasonMraz: 'Have It All'}

function updatePlaylist(playlist, artist, song){
  Object.assign(playlist, artist, song)
  return playlist
}