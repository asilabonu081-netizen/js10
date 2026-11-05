
const sekund = document.querySelector(".s"),
      minut = document.querySelector(".m"),
      soat = document.querySelector(".h"),
      hours = document.querySelector(".hours"),
      minutes = document.querySelector(".minutes");
function clock() {
    let time = new Date();
    let s = time.getSeconds() * 6;
    let m = time.getMinutes() * 6;
    let h = time.getHours() * 30;

    sekund.style.transform = `rotate(${s}deg)`;
    minut.style.transform = `rotate(${m}deg)`;
    soat.style.transform = `rotate(${h}deg)`;
    let currentHours = time.getHours();
    let currentMinutes = time.getMinutes();
    
    hours.innerHTML = currentHours < 10 ? "0" + currentHours : currentHours;
    minutes.innerHTML = currentMinutes < 10 ? "0" + currentMinutes : currentMinutes;

    setTimeout(() => {
        clock();
    }, 1000);
}
clock();
const tabsItem = document.querySelectorAll('.tabsItem');
const content = document.querySelectorAll('.tabsContentItem');

for (let i = 0; i < tabsItem.length; i++) {
    tabsItem[i].addEventListener('click', (e) => {
        e.preventDefault(); 
        
        tabsItem.forEach((item, j) => {
            item.classList.remove('active');
            content[j].classList.remove('active');
        });
        
        tabsItem[i].classList.add('active');
        content[i].classList.add('active');
    });
}

const stopwatchBtn = document.querySelector('.stopwatch__btn');
const stopwatchSeconds = document.querySelector('.stopwatch__seconds');
const stopwatchMinutes = document.querySelector('.stopwatch__minutes');
const stopwatchHours = document.querySelector('.stopwatch__hours');
const tabsLinkSpan = document.querySelector('.tabsLink__span');

let sec = 0;
let min = 0;
let hr = 0;
let stopwatchTimeout = null;
let isRunning = false;

function stopwatch() {
    sec++;
    if (sec >= 60) {
        sec = 0;
        min++;
        if (min >= 60) {
            min = 0;
            hr++;
        }
    }

    stopwatchSeconds.innerHTML = sec;
    stopwatchMinutes.innerHTML = min;
    stopwatchHours.innerHTML = hr;

    if (isRunning) {
        stopwatchTimeout = setTimeout(() => {
            stopwatch();
        }, 1000);
    }
}

stopwatchBtn.addEventListener('click', () => {
    if (stopwatchBtn.innerHTML === 'start') {
        stopwatchBtn.innerHTML = 'stop';
        tabsLinkSpan.classList.add('active');
        isRunning = true;
        stopwatch();
    } else if (stopwatchBtn.innerHTML === 'stop') {
        stopwatchBtn.innerHTML = 'clear';
        tabsLinkSpan.classList.remove('active');
        tabsLinkSpan.classList.add('active_clear');
        isRunning = false;
        clearTimeout(stopwatchTimeout);
    } else if (stopwatchBtn.innerHTML === 'clear') {
        stopwatchBtn.innerHTML = 'start';
        tabsLinkSpan.classList.remove('active_clear');
        isRunning = false;
        clearTimeout(stopwatchTimeout);
        sec = 0;
        min = 0;
        hr = 0;
        stopwatchSeconds.innerHTML = sec;
        stopwatchMinutes.innerHTML = min;
        stopwatchHours.innerHTML = hr;
    }
  });



