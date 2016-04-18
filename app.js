//Do Not Modify the getMusic function
function getMusic(){
  var artist = document.getElementById('artist').value;
  itunes.getMusicByArtist(artist).then(drawSongs);
}



function drawSongs(songList){
  
    var artist = document.getElementById('artist').value;
    var element = document.getElementById('song-list');
    var elemCount = document.getElementById('song-count');
    
    elemCount.innerText = "Showing " + songList.length + " results for " + artist;
    
    for (var i = 0; i < songList.length; i++) {
    currSong = songList[i];
    element.innerHTML +='<li class="list-group-item">' 
    + '<div class="row">'
    + '<div class="col-xs-2">' + '<img src="' + currSong.albumArt + '" alt="album"/> </div>'
    + '<div class="col-xs-3">' + 'Title: '  + currSong.title + '<br>' + "Collection: " + currSong.collection + '</div>'
    + '<div class="col-xs-5"> <audio controls><source src="' + currSong.preview + '" type="audio/ogg"></audio> </div>'
    + '<div class="col-xs-2">' + " Price " + currSong.price + '</div> </div>' 
    + '</li>';
    }
}