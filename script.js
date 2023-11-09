// script.js

document.addEventListener('DOMContentLoaded', function () {
    var video = document.getElementById('wedding-video');

    // Function to open video in fullscreen
    function openFullscreen(element) {
        if (element.requestFullscreen) {
            element.requestFullscreen().catch(errorHandler);
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen().catch(errorHandler);
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen().catch(errorHandler);
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen().catch(errorHandler);
        }
    }

    // Open video in fullscreen on video click
    video.addEventListener('click', function () {
        openFullscreen(video);
    });

    // Fullscreen error handler
    function errorHandler(error) {
        console.error('Fullscreen error:', error);
    }
});
