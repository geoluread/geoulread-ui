window.onload = function() {
    
};

function home() {
   if(this !== "index"){location.replace("../index.html");}
   else{location.replace("index.html");}
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
navButtonPage.set("aboutBool", "about.html");
navButtonPage.set("resumeBool", "resume.html");


function navigationClicked(nodeChild){

   console.log(window.location.href)

   tagId = nodeChild.firstChild.id;
   var navButtonState = document.getElementById(tagId);

   var buttonTag = tagId+"Bool";
   console.log(buttonTag)
   var buttonBool;

   for(const key of navButtonMap.keys()){
      if(key === buttonTag){
         buttonBool = navButtonMap.get(key);
         break;
      }
   }

   if(buttonBool == true){
      navButtonState.src="assets/"+tagId+"-usb.png";
      navButtonMap.set(buttonTag,false);
      location.replace("index.html")
   }
   else if(buttonBool == false){
      navButtonState.src="assets/"+tagId+"-sb.png";
      navButtonMap.set(buttonTag,true);
      if (window.location.href.includes("pages")){
         location.replace(navButtonPage.get(buttonTag))

      }else{
         buttonUrl = "pages/"+navButtonPage.get(buttonTag)
         location.replace(buttonUrl)
      }
   }   
}

