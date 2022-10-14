window.onload = function () {
    
    let timer = '000.00';
    let interval;

    buttonStart.onclick = function () {
        clearInterval(interval);
        interval = setInterval(startTimer, 10);
    }
 
    buttonStop.onclick = function () {
        clearInterval(interval);
    }

    buttonReset.onclick = function () {
        document.getElementById('StopWatchDisplay').innerText = '000.00';
    }

    function startTimer () {
        timer = document.getElementById('StopWatchDisplay').innerText;
        let hundreths = Number(timer.slice(-2));
        hundreths ++;
        let separator = timer.indexOf('.');
        hundreths += 100 * Number(timer.slice(0,separator));
        timer = String(hundreths).padStart(5, '0');

        document.getElementById('StopWatchDisplay').innerText = timer.slice(0,3) + '.' + timer.slice(-2,);
    }
    
    

}