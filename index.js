setInterval(setClock,1000) //call this function every second

const hourHand = document.querySelector("[data-hour-hand]");
const minuteHand = document.querySelector("[data-minute-hand]");
const secondHand = document.querySelector("[data-second-hand]");

function setClock(){//gets the current date
  const currentDate = new Date();//constructor that gives exact current time
  const secondsRatio = currentDate.getSeconds()/60;//how far to rotate the seconds hand
  const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60; //gradually move the minute hand
  const hoursRatio = (minutesRatio + currentDate.getHours())/12;//gradually move the hour hand
  setRotation(secondHand, secondsRatio)
  setRotation(minuteHand, minutesRatio)
  setRotation(hourHand, hoursRatio)
}


function setRotation(element, rotationRatio) {
  element.style.setProperty('--rotation', rotationRatio * 360)
}

setClock()
