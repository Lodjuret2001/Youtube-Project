document.addEventListener('DOMContentLoaded', function () {
    var images = document.getElementsByClassName('yt-video-thumbnail');
    for (var i = 0; i < images.length; i++) {
        images[i].addEventListener('click', function () {
            window.location.href = 'https://www.youtube.com';
        });
    }
});