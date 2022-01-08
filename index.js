const dayElement = document.querySelector(".day");
const hourElement = document.querySelector(".hour");
const minuteElement = document.querySelector(".minute");
const secondElement = document.querySelector(".second");

let time = 777341;

const Timer = ()=>{
    
    

    const day = String(Math.trunc(time / 86400)).padStart(2, 0)
    const hour = String(Math.trunc((time - (86400*8)) / 3600)).padStart(2, 0);
    const minute = String(Math.trunc((time - (86400*8 + 3600*23))/60));
    let second = String(Math.trunc(time % 60)).padStart(2, 0);
    
    

    dayElement.textContent = `${day}`;
    hourElement.textContent = `${hour}`;
    minuteElement.textContent = `${minute}`;
    secondElement.textContent = `${second}`;
    
    time--

   
}

setInterval(Timer,1000)


