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

// Top Videos Section functionality
const topVideosArray = [
    {
        id: 1,
        imgSrc: "images/top-videos-1.jpg",
        alt: "top_videos_1",
        title: "How To Create Sub Domain",
        time: "05:18"
    },
    {
        id: 2,
        imgSrc: "images/top-videos-2.jfif",
        alt: "top_videos_2",
        title: "Playing With The DNS",
        time: "03:20"
    },
    {
        id: 3,
        imgSrc: "images/top-videos-3.jfif",
        alt: "top_videos_3",
        title: "Everything About The Virtual Hosts",
        time: "05:25"
    },
    {
        id: 4,
        imgSrc: "images/top-videos-4.jpg",
        alt: "top_videos_4",
        title: "How To Monitor Your Website",
        time: "04:16"
    },
    {
        id: 5,
        imgSrc: "images/top-videos-5.jpg",
        alt: "top_videos_5",
        title: "Uncharted Beating The Last Boss",
        time: "06:48"
    },
    {
        id: 6,
        imgSrc: "images/top-videos-6.webp",
        alt: "top_videos_6",
        title: "Ys Oath In Felghana Overview",
        time: "02:55"
    },
    {
        id: 7,
        imgSrc: "images/top-videos-7.jpg",
        alt: "top_videos_7",
        title: "Ys Series All Games Ending",
        time: "08:10"
    },
];

// Select Needed Elements
const imagesHolder = document.querySelector('.top-videos .container .video .images-holder');
const topVideoTitle = document.querySelector('.top-videos .container .video p');
const randomVideosContainer = document.querySelector('.top-videos .random .videos');
const randomBtn = document.querySelector('.top-videos .random #random-btn');

// Loop Through The Array And Create The Top Video Switchers
topVideosArray.forEach((videoObj) => {

    const videoSwitcher = document.createElement('li');
    videoSwitcher.className = 'video-switcher';
    videoSwitcher.setAttribute('data-id', videoObj.id);
    videoSwitcher.innerHTML = `
        ${videoObj.title}
        <span class="time">${videoObj.time}</span>
    `;

    randomVideosContainer.appendChild(videoSwitcher);
    
    // Put Each Top Video Image In The Images Holder
    const videoImage = document.createElement('img');
    videoImage.setAttribute('data-id', videoObj.id);
    videoImage.src = videoObj.imgSrc;
    videoImage.alt = videoObj.alt;

    imagesHolder.appendChild(videoImage);

});

// Mark The First Video As Active
const allSwitchers = Array.from(randomVideosContainer.querySelectorAll('.video-switcher'));
const allImages = Array.from(imagesHolder.querySelectorAll('img'));

allImages[0].classList.add('active');
topVideoTitle.textContent = topVideosArray[0].title;
allSwitchers[0].classList.add('active');

// The Functionality Of The Switchers
allSwitchers.forEach((switcher) => {

    // Attach Click Event To Each Switcher
    switcher.addEventListener('click', function () {

        // Remove Active Class From All Switchers & All Images
        allSwitchers.forEach(s => s.classList.remove('active'));
        allImages.forEach(img => img.classList.remove('active'));

        // Add Active Class To The Clicked Switcher
        this.classList.add('active');

        // Get The ID Of The Clicked Switcher
        let videoId = Number(this.getAttribute('data-id'));

        // Get The Video Object From The Array Using The ID
        const videoObj = topVideosArray.find(video => videoId === video.id);

        // Update The Top Video Image And Title
        allImages.find(img => Number(img.getAttribute('data-id')) === videoId).classList.add('active');
        topVideoTitle.textContent = videoObj.title;

    });

});

// The Functionality Of The Random Button
randomBtn.addEventListener('click', function () {

    // Get A Random Video Object From The Array
    const randomVideoObj = topVideosArray[Math.floor(Math.random() * topVideosArray.length)];

    // Remove Active Class From All Switchers and All Images
    allSwitchers.forEach(s => s.classList.remove('active'));
    allImages.forEach(img => img.classList.remove('active'));

    // Add Active Class To The Matched Random Video Switcher
    const matchedSwitcher = allSwitchers.find(s => Number(s.getAttribute("data-id")) === randomVideoObj.id);
    matchedSwitcher.classList.add('active');

    // Update The Top Video Image And Title
    allImages.find(img => Number(img.getAttribute('data-id')) === randomVideoObj.id).classList.add('active');
    topVideoTitle.textContent = randomVideoObj.title;

});