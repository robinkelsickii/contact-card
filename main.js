var time = document.getElementById('time'); 

function currentTime(){
    let clock = new Date;

    let hours = clock.getHours();
    let minutes = clock.getMinutes(); 

    time.innerHTML = `${hours} : ${minutes}`
}

function doubleDigits(time) {
    if (time < 10) {
        return '0' + time;
    }
    return time;
}

setInterval(currentTime, 1000); 