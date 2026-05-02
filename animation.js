// Get the audio element
var audio = document.getElementById("myAudio");

// You can also set the volume immediately when the page loads
// Make sure the script runs after the audio element is loaded
window.onload = function() {
    audio.volume = 0.15; // Example: set volume to 20% on load
};