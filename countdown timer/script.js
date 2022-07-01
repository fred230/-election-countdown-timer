const daysEl = document.getElementById("days")
const hoursEl = document.getElementById("hours")
const MinutesEl = document.getElementById("mins")
const secondsEl  = document.getElementById("seconds")


const electionDate = '9 Aug 2022'


function countdown(){
   const currentDate = new Date();
   const electionDateDay = new Date(electionDate);

    const totalSeconds = (electionDateDay - currentDate)/1000

    const Days = Math.floor(totalSeconds/3600/24)  
    const Hours = Math.floor(totalSeconds/3600)%24
    const Minutes = Math.floor(totalSeconds/60)%60
   const Seconds = Math.floor(totalSeconds)%60

   daysEl.innerHTML = Days
   hoursEl.innerHTML = Hours
   MinutesEl.innerHTML = Minutes
   secondsEl.innerHTML = Seconds



}

countdown()
setInterval(countdown)