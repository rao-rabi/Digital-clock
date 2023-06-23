function displayTime() {
    let date = new Date();

    let hrs = date.getHours();
    let mins = date.getMinutes();
    let sec = date.getSeconds();
    let session = document.getElementById('session');

    let formattedHours = hrs % 12 || 12;

    document.getElementById('hours').innerHTML = formattedHours;
    document.getElementById('mins').innerHTML = mins;
    document.getElementById('secs').innerHTML = sec;

    if (hrs >= 12) {
        session.innerHTML = 'PM';
    }
    else {
        session.innerHTML = 'AM'
    }
}


setInterval(displayTime, 1000)