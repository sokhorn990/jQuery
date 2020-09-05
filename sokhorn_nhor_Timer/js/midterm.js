var timer = () => {
    let time = new Date();
    let hours = (time.getHours() % 12).toString();
    let minute = time.getMinutes().toString();
    let second = time.getSeconds().toString();
    let year = time.getFullYear().toString();

    if (hours.length < 2) {
        hours = "0" + hours;
    }
    if (hours.length < 2) {
        hours = "0" + hours;
    }
    if (minute.length < 2) {
        minute = "0" + minute;
    }
    if (second.length < 2) {
        second = "0" + second;
    }
    //get time and show the message 
    if (time.getHours() < 12) {
        document.querySelector("h1").innerHTML = hours + ":" + minute + ":" + second + " " + "AM" + " <br/>" + year;
        document.querySelector("h2").innerHTML = "Good morning !" + "<br/>Sokhorn";
    } else {
        document.querySelector("h1").innerHTML = hours + ":" + minute + ":" + second + " " + "PM" + " <br/>" + year;
        document.querySelector("h2").innerHTML = "Good afternoon !" + "<br/>Sokhorn";
    }
    if (time.getHours() >= 17) {
        document.querySelector("h1").innerHTML = hours + ":" + minute + ":" + second + " " + "PM" + " <br/>" + year;
        document.querySelector("h2").innerHTML = "Good evening !" + "<br/>Sokhorn";
    }
    if (time.getHours() >= 19) {
        document.querySelector("h1").innerHTML = hours + ":" + minute + ":" + second + " " + "PM" + " <br/>" + year;
        document.querySelector("h2").innerHTML = "Good night !" + "<br/>Sokhorn";
    }
    if (time.getHours() == 12) {
        document.querySelector("h1").innerHTML = time.getHours() + ":" + minute + ":" + second + " " + "PM" + " <br/>" + year;
        document.querySelector("h2").innerHTML = "Good afternoon!" + "<br/>Sokhorn";
    }
}
setInterval(timer, 1000);
timer();