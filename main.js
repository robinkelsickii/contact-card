var time = document.getElementById('time');

function currentTime() {
    let clock = new Date;

    let hours = doubleDigits(clock.getHours());
    let minutes = doubleDigits(clock.getMinutes());

    time.innerHTML = `${hours} : ${minutes}`
}

function doubleDigits(clock) {
    if (clock < 10) {
        return '0' + clock;
    }
    return clock;
}

setInterval(currentTime, 1000);