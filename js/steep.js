let startBtn = document.getElementById("startbtn"),
 resetBtn = document.getElementById("resetbtn"),
 stopBtn = document.getElementById("stopbtn"),
 timerDisplay = document.querySelector(".timerDisplay"),
 msec = 00,
 sec = 00,
 min = 00,
 timerId = null;
startBtn.addEventListener("click" , function(){
    if (timerId !== null) {
        clearInterval(timerId);
    }
  timerId = setInterval(starTimer , 10);
})
stopBtn.addEventListener("click" , function(){
    clearInterval(timerId);
})
resetBtn.addEventListener("click" , function(){
    clearInterval(timerId);
    timerDisplay.innerHTML = '00 : 00 : 00';
    msec = sec = min = 00;
})
function starTimer () {
    msec++;
    if (msec === 100){
        msec = 0;
        sec++;
        if(sec === 60){
        sec = 0;
        min++;
    }
    }


let msecString = msec < 10 ? `0${msec}` : msec,
 secString =  sec < 10 ? `0${sec}` : sec,
 minString =  min < 10 ? `0${min}` : min;
timerDisplay.innerHTML = `${msecString} : ${secString} : ${minString}`;
}