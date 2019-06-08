var playlist = new Object({SmashingPumpkins: 'Tonight, Tonight'});

function updatePlaylist(playlist,artistName,songTitle){
  playlist[artistName]=songTitle
  return playlist
}