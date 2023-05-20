function displayTime(){
    let date = new Date();

    let hrs = date.getHours();
    let mins = date.getMinutes();
    let sec = date.getSeconds();
    let session = document.getElementById('session');

    document.getElementById('hours').innerHTML = hrs;
    document.getElementById('mins').innerHTML = mins;
    document.getElementById('secs').innerHTML = sec;

    if(hrs >=12){
        session.innerHTML = 'PM';
    }
    else{
        session.innerHTML = 'AM'
    }

    if(hrs > 12){
        hrs = hrs-12;
    }
}

setInterval(displayTime, 1000)