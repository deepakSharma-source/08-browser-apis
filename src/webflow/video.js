const video = document.querySelector("#video video");
const play = document.querySelector("#play");
const stop = document.querySelector("#stop");
const progress = document.querySelector("#progress");
const timestamp = document.querySelector("#timestamp");

/**
 * Play or pause video
 * @returns {void}
 * If video is paused, play it. If video is playing, pause it.
 */
function playPause() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

/**
 * Stop video
 * @returns {void}
 * Set video time to 0 and pause video
 */
function stopVideo() {
  video.currentTime = 0;
  video.pause();
}

/**
 * Update play button icon
 * @returns {void}
 * If video is paused, show play icon. If video is playing, show pause icon.
 */
function updatePlayButtonText() {
  if (video.paused) {
    play.innerHTML = "Play";
  } else {
    play.innerHTML = "Pause";
  }
}

/**
 * Update the progress bar
 * @returns {void}
 * Update the progress bar value to the current video time
 */
function updateProgress() {
  // Update progress bar using video time divided by duration times 100
  progress.value = (video.currentTime / video.duration) * 100;

  // Get minutes
  let minutes = Math.floor(video.currentTime / 60);
  if (minutes < 10) {
    minutes = "0" + String(minutes);
  }

  // Get seconds
  let seconds = Math.floor(video.currentTime % 60);
  if (seconds < 10) {
    seconds = "0" + String(seconds);
  }

  // Update timestamp
  timestamp.textContent = `${minutes}:${seconds}`;
}

/**
 * Sets the progress bar
 * @returns {void}
 * Set the video time to the progress bar value
 *
 */
function setProgress() {
  video.currentTime = (Number(progress.value) * video.duration) / 100;
}

video.addEventListener("click", playPause);
video.addEventListener("play", updatePlayButtonText);
video.addEventListener("pause", updatePlayButtonText);
video.addEventListener("timeupdate", updateProgress);

play.addEventListener("click", playPause);
stop.addEventListener("click", stopVideo);
progress.addEventListener("click", setProgress);
