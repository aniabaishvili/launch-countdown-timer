const countDownDate = new Date("Jan 31, 2024 15:37:25").getTime();

const countOfDays = document.getElementById("d");
const countOfHours = document.getElementById("h");
const countOfMinutes = document.getElementById("m");
const countOfSeconds = document.getElementById("s");


// Update the count down every 1 second
var x = setInterval(function() {

    // Get today's date and time
    const now = new Date().getTime();
  
    // Find the distance between now and the count down date
    const distance = countDownDate - now;
  
    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  
    document.getElementById("d").innerHTML = days + "d " 
    document.getElementById("h").innerHTML =  hours + "h "
    document.getElementById("m").innerHTML = minutes + "m " 
    document.getElementById("s").innerHTML = seconds + "s ";

    
    // If the count down is finished, write some text 
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("demo").innerHTML = "EXPIRED";
    }
  }, 1000);
