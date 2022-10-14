
// let hhmmss = resetStopWatch;

function showStopWatch (hhmmss) {
    
    // alert(hhmmss)
    
    document.getElementById("StopWatchDisplay").textContent = hhmmss;

    setTimeout(showStopWatch, 10000);

}

showStopWatch('00:00:00');

// function startStopWatch(hhmmss) {


// }

// function stopStopWatch() {


// }


// function resetStopWatch() {

//     return '00:00:00'

// }