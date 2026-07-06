window.onload = function() {
    
};

function home() {
   location.replace("../index.html");
}

var justinTrack = new Audio("..\\assets\\different_world_type_ beat_2.m4a"); // Justin song :)
var musicOff = true;
var musicState = document.getElementById('theMusic')

/**
 * Method to turn music and background gif on and off
 */
musicState.addEventListener('click', () => {

    if(musicOff == false){
        musicState.src="../assets/music-off.png";
        justinTrack.pause();
        document.body.style.backgroundImage =  'url('+'../assets/blue-stars-static-transparent.png'+')';
        musicOff = true;
    }
    else if(musicOff == true){
        musicState.src="../assets/music-on.gif";
        justinTrack.volume = .25;
        justinTrack.loop = true;
        justinTrack.play();
        document.body.style.backgroundImage =  'url('+'../assets/blue-stars-transparent.gif'+')';
        musicOff = false;
    }
});

const navButtonMap = new Map();
navButtonMap.set("aboutBool", false);
navButtonMap.set("resumeBool", false);
navButtonMap.set("projectBool", false);
navButtonMap.set("blogBool", false);
navButtonMap.set("funBool", false);

const navButtonPage = new Map();
navButtonPage.set("aboutBool", "pages/about.html");


function navigationClicked(nodeChild){
   tagId = nodeChild.firstChild.id;
   var navButtonState = document.getElementById(tagId);

   var funcTag = tagId+"Bool";
   var funcBool;

   for(const key of navButtonMap.keys()){
      if(key.includes(tagId)){
         funcBool = navButtonMap.get(key);
      }
   }

   if(funcBool == true){
      navButtonState.src="assets/"+tagId+"-usb.png";
      navButtonMap.set(funcTag,false);
      location.replace("index.html")
   }
   else if(funcBool == false){
      navButtonState.src="assets/"+tagId+"-sb.png";
      navButtonMap.set(funcTag,true);
      location.replace(navButtonPage.get(funcTag))
   }   
}

