var playlist = { jasonMraz: 'Have It All'}

function updatePlaylist(playlist, artist, song){
  playlist[artist] = song
  return playlist
}