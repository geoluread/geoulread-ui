
var justinTrack = new Audio("assets\\different_world_type_ beat_2.m4a"); // Justin song :)

window.onload = function() {
    
};

var musicState = document.getElementById('theMusic')
var musicOff = true;

musicState.addEventListener('click', () => {

    console.log(musicOff)

    if(musicOff == false){
        musicState.src="assets/music-off.png";
        justinTrack.pause();
        musicOff = true;
    }
    else if(musicOff == true){
        musicState.src="assets/music-on.gif";
        justinTrack.currentTime = 0;
        justinTrack.volume = .25;
        justinTrack.loop = true;
        justinTrack.play();
        musicOff = false;
    }

    console.log(musicOff)
});