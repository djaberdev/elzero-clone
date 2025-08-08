// Hide / Show Mega Menu
const otherLinks = document.getElementById("other-links");
const megaManu = document.querySelector(".mega-menu");
const closeBtn = document.getElementById("close-btn");

otherLinks.addEventListener("click", function () { megaManu.classList.add('show') });

closeBtn.addEventListener("click", function () { megaManu.classList.remove('show') });   

// Fill Progress Bars When Reached They Own Section
const skillsSec = document.getElementById('skills');
const progsFills = skillsSec.querySelectorAll('.the-prog span');

function fillProgs() {
    progsFills.forEach(progFill => progFill.style.cssText = `width: ${progFill.dataset.width}`);
};

window.onscroll = () => {
    if (window.scrollY >= skillsSec.offsetTop) { fillProgs() };
}

// Count Down Timer

const countDownDate = new Date("Jan 1, 2026 00:00:00").getTime();

document.querySelector('.days').innerHTMLL = "00";
document.querySelector('.hours').innerHTML = "00";
document.querySelector('.minutes').innerHTML = "00";
document.querySelector('.seconds').innerHTML = "00";

const countDown = setInterval(() => {

    // Get Current Date 
    const dateNow = new Date().getTime();

    // Get The Difference Between Now and Countdown Date
    const diff = countDownDate - dateNow;

    // Get Days, Hours, Minutes, Seconds
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor(diff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    const minutes = Math.floor(diff % (1000 * 60 * 60) / (1000 * 60));
    const seconds = Math.floor(diff % (1000 * 60) / 1000);

    // Display The Result
    document.querySelector('.days').innerHTML = days < 10 ? `0${days}` : days;
    document.querySelector('.hours').innerHTML = hours < 10 ? `0${hours}` : hours;
    document.querySelector('.minutes').innerHTML = minutes < 10 ? `0${minutes}` : minutes;
    document.querySelector('.seconds').innerHTML = seconds < 10 ? `0${seconds}` : seconds;

    if (diff <= 0) {
        clearInterval(countDown);
        
        document.querySelector('.days').innerHTMLL = "00";
        document.querySelector('.hours').innerHTML = "00";
        document.querySelector('.minutes').innerHTML = "00";
        document.querySelector('.seconds').innerHTML = "00";
    };

}, 1000);