let playBtn = document.getElementById("play-btn");
let video = document.querySelector(".video");

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

//Add Event Listners//
playBtn.addEventListener('click', playOrPauseVideo);
video.addEventListener('click',playOrPauseVideo);