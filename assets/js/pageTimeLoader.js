let startTime = 0;

(function () {
    startTime = (new Date).getTime();
})();

document.addEventListener("DOMContentLoaded", () => {
    let endTime = (new Date).getTime();
    let loadTime = endTime - startTime;
    let footer = document.getElementsByClassName('footer')[0];
    footer.innerHTML += '<p class="footer__text">Page load time: ' + loadTime + ' ms</p>';
})