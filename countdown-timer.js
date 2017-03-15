/**
 * countdown timer
 * 
 */

var timerDisplay = document.querySelector('.display-time-left');
var endTimeDisplay = document.querySelector('.display-end-time');
var timerButtons = document.querySelectorAll('.timer-button');
var inputMinutes = document.querySelector('[name="customForm"]');
var countdown;


function timer(seconds){       
    //clear any previous started timers 
    clearInterval(countdown);    
    var now = Date.now();
    var then = now + seconds * 1000;    
    displayEndTime(then);
    countdown = setInterval(function(){
        var secondsLeft = Math.round((then - Date.now()) / 1000);
        if(secondsLeft < 0) {
            clearInterval(countdown);
            clearTimer();
            return;
        }        
        displayTimeLeft(secondsLeft);        
    },1000);
}
function displayTimeLeft(seconds){   
    var minutes = Math.floor(seconds / 60);     
    var remainingSeconds = seconds % 60; 
    var display = minutes + " : " + ((remainingSeconds < 10) ? '0' : ' '  + remainingSeconds);
    timerDisplay.innerHTML = display;
    document.title =display;
}
function displayEndTime(timestamp) {
  var end = new Date(timestamp);
  var hour = end.getHours();  
  var minutes = end.getMinutes();
  endTimeDisplay.innerHTML = "The presentation continues at: "+ hour + ":" + ((minutes < 10) ? '0' : '' + minutes);
}
function clearTimer(){
     timerDisplay.innerHTML = "0:00";
}
timerButtons.forEach(function(item){    
    item.addEventListener('click',function(e){   
        timerButtons.forEach(function(currentButton){
            currentButton.classList.remove('active');
        });        
        if(item === this){
            item.classList.add('active');
        }
        timer(item.dataset.time);        
    });
});
inputMinutes.addEventListener('submit',function(e){
   e.preventDefault();
  var mins = this.minutes.value;  
  timer(mins * 60);
  this.reset();
});