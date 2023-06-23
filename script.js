function displayTime() {
    let date = new Date();

    let hrs = date.getHours();
    let mins = date.getMinutes();
    let sec = date.getSeconds();
    let session = document.getElementById('session');

    let formattedHours = hrs % 12 || 12;

    document.getElementById('hours').innerHTML = formatTwoDigits(formattedHours);
    document.getElementById('mins').innerHTML = formatTwoDigits(mins);
    document.getElementById('secs').innerHTML = formatTwoDigits(sec);

    if (hrs >= 12) {
        session.innerHTML = 'PM';
    }
    else {
        session.innerHTML = 'AM'
    }

    function formatTwoDigits(value){
        return value.toString().padStart(2, '0')
    }
}


setInterval(displayTime, 1000)