

var min = 0;
var sec = 0;
var msec =0;
var interval;


var msecHeading = document.getElementById('msec')
var secHeading = document.getElementById('sec')
var minHeading = document.getElementById('min')

function timer(){
  
    msec++
    msecHeading.value = msec

    if(msec >= 100){
        sec++
        secHeading.value = sec
        msec=0;
    }else if( sec >= 60){
        min++
        minHeading.value = min
        sec=0;
    
    }
  
}
function start(){
    interval = setInterval(timer,10)

}
function stop(){
    clearTimeout(interval)
    document.getElementById("stopBtn").disabled = false;    
}

function r() {
   min = 0;
   sec=0;
   msec=0;
   msecHeading.value = min
   secHeading.value =sec
   minHeading.value =msec
   stop();
}




