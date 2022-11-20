// variabes
let hourEl, minuteEl, secondEl, currentDate, hour,
    second, minute, hourDeg, minuteDeg, secondDeg;

// get tags from HTMLDocument
hourEl = document.querySelector(".hour");
minuteEl = document.querySelector(".minute");
secondEl = document.querySelector(".second");

// Update clock function
function updateClock() {
  currentDate = new Date();
  second = currentDate.getSeconds();
  minute = currentDate.getMinutes();
  hour = currentDate.getHours();
  hourDeg = (hour / 12) * 360;
  minuteDeg = (minute / 60) * 360;
  secondDeg = (second / 60) * 360;
  hourEl.style.transform = `rotate(${hourDeg}deg)`;
  minuteEl.style.transform = `rotate(${minuteDeg}deg)`;
  secondEl.style.transform = `rotate(${secondDeg}deg)`;
}
updateClock();
setInterval(updateClock, 1000);
