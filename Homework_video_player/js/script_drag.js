/* Get Our Elements */
var player = document.querySelector(".player");
var video = player.querySelector(".viewer");
var progress = player.querySelector(".progress");
var progressBar = player.querySelector(".progress__filled");
var toggle = player.querySelector(".toggle");
var skipButtons = player.querySelectorAll("[data-skip]");
var ranges = player.querySelectorAll(".player__slider");
var screen = player.querySelector(".full_screen")

/* Build out functions */
function togglePlay() {
    var method = video.paused ? "play" : "pause";
    video[method]();
}

function updateButtonPlay() {
    var icon = this.paused ? "►" : "❚ ❚";
    console.log(icon);
    toggle.textContent = icon;
}

function updateButtonScreen() {
    var x = document.getElementById("full_screen");
    if (x.innerHTML === "▭") {
        x.innerHTML = "◱";
        openFullscreen();

    } else {
        closeFullscreen();
        x.innerHTML = "▭";
    }
}

function skip() {
    video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
    video[this.name] = this.value;
}

function handleProgress() {
    var percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
    var scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}

/* Hook up the event listners */
video.addEventListener("click", togglePlay);
video.addEventListener("play", updateButtonPlay);
video.addEventListener("pause", updateButtonPlay);
video.addEventListener("timeupdate", handleProgress);
video.addEventListener("dblclick", updateButtonScreen);




toggle.addEventListener("click", togglePlay);
skipButtons.forEach(button => button.addEventListener("click", skip));
ranges.forEach(range => range.addEventListener("change", handleRangeUpdate));
ranges.forEach(range => range.addEventListener("mousemove", handleRangeUpdate));

var mousedown = false;
progress.addEventListener("click", scrub);
progress.addEventListener("mousemove", (e) => mousedown && scrub(e));
progress.addEventListener("mousedown", () => mousedown = true);
progress.addEventListener("mouseup", () => mousedown = false);

var elem = document.getElementById("myvideo");

function openFullscreen() {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
        elem.msRequestFullscreen();
    }
}

function closeFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) { /* Safari */
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE11 */
        document.msExitFullscreen();
    }
}