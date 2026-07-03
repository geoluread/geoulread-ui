window.onload = function() {
    
};

var justinTrack = new Audio("assets\\different_world_type_ beat_2.m4a"); // Justin song :)
var musicOff = true;
var musicState = document.getElementById('theMusic')

/**
 * Method to turn music and background gif on and off
 */
musicState.addEventListener('click', () => {

    if(musicOff == false){
        musicState.src="assets/music-off.png";
        justinTrack.pause();
        document.body.style.backgroundImage =  'url('+'assets/blue-stars-static-transparent.png'+')';
        musicOff = true;
    }
    else if(musicOff == true){
        musicState.src="assets/music-on.gif";
        justinTrack.volume = .25;
        justinTrack.loop = true;
        justinTrack.play();
        document.body.style.backgroundImage =  'url('+'assets/blue-stars-transparent.gif'+')';
        musicOff = false;
    }
});


var aboutButtonState = document.getElementById('aboutme');
var aboutButton = true;
aboutButtonState.addEventListener('click', () => {

   console.log("About Me Button Selected")
});

var resumeButtonState = document.getElementById('resume');
var resumeButton = true;
resumeButtonState.addEventListener('click', () => {

   console.log("Resume Button Selected")
});

var projectButtonState = document.getElementById('project');
var projectButton = true;
projectButtonState.addEventListener('click', () => {

   console.log("Project Button Selected")
});


var blogButtonState = document.getElementById('blog');
var blogButton = true;
blogButtonState.addEventListener('click', () => {

   console.log("Blog Button Selected")
});

var funButtonState = document.getElementById('fun');
var funButton = true;
funButtonState.addEventListener('click', () => {

   console.log("Fun Button Selected")
});