let playBtn = document.getElementById("play-btn");
let video = document.querySelector(".video");
let progressBar = document.querySelector(".progress-bar");
let progressRange = document.querySelector(".progress-range");

let isVideoPlaying = false;

// Let play or pause the video

function playOrPauseVideo() {
    if (!isVideoPlaying) {
        video.play();
        isVideoPlaying = true;
        playBtn.classList.replace("fa-play", "fa-pause");
    } else{
        video.pause();
        isVideoPlaying = false;
        playBtn.classList.replace("fa-pause" , "fa-play");
    }
}

// update progress bar

function updateProgressbar(Event) {
    let currentTime = Event.target.currentTime;
    let duration = Event.target.duration;
    progressBar.style.cssText = `width:${(currentTime / duration ) * 100}%` ;
     
}

//update seek bar//

function updateSeekBar(event) {
    let currentPoint = event.offsetX;
    let progressbarWidth = this.clientWidth;
    let currentRange = (currentPoint / progressbarWidth) * video.duration;
    video.currentTime = currentRange;
}

//Add Event Listners//
playBtn.addEventListener("click", playOrPauseVideo);
video.addEventListener("click",playOrPauseVideo);
video.addEventListener("timeupdate", updateProgressbar);
progressRange.addEventListener("click", updateSeekBar);