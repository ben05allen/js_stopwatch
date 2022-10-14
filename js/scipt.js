
let hhmmss = resetStopWatch;

function showStopWatch (hhmmss) {
    
    document.getElementById('StopWatchDisplay').innerContent = hhmmss;

    setTimeout(showStopWatch, 1000);

}



function startStopWatch(hhmmss) {


}

function stopStopWatch() {


}


function resetStopWatch() {

    return '00:00:00'

}