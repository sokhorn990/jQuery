//type the key
document.addEventListener("keyup", function (event) {
    if (event.keyCode == 67) {
        document.body.style.background = "red";
    }
    if (event.keyCode == 65) {
        document.body.style.background = "blue";
    }
    if (event.keyCode == 66) {
        document.body.style.background = "pink";
    }
});
//get day
var timer = () => {
    let time = new Date();
    let hours = (time.getHours() % 12).toString();
    let minute = time.getMinutes().toString();
    let second = time.getSeconds().toString();
    if (hours.length < 2) {
        hours = "0" + hours;
    }
    if (minute.length < 2) {
        minute = "0" + minute;
    }
    if (second.length < 2) {
        second = "0" + second;
    }
    if (time.getHours() < 12) {
        document.getElementById("h1").innerHTML = hours + ":" + minute + ":" + second + " " + "AM";
        document.getElementById("h2").innerHTML = "Good Morning"
    }
    if (time.getHours() > 12) {
        document.getElementById("h1").innerHTML = hours + ":" + minute + ":" + second + " " + "PM";
        document.getElementById("h2").innerHTML = "Good Afternoon"
        document.body.style.background = "pink"

    }

    if (time.getHours() > 19) {
        document.getElementById("h1").innerHTML = hours + ":" + minute + ":" + second + " " + "PM";
        document.getElementById("h2").innerHTML = "Good Night"
        document.body.style.background = "pink"

    }
    // if (time.getHours() <16) {
    //     document.getElementById("h1").innerHTML =time.getHours() + ":" + minute + ":" + second + " " + "PM";
    //     document.getElementById("h2").innerHTML="Good Evening"
    //     document.body.style.background="teal"
    // }
    if (time.getHours() == 12) {
        document.getElementById("h1").innerHTML = time.getHours() + ":" + minute + ":" + second + " " + "PM";
        document.getElementById("h2").innerHTML = "Good Afternoon"
    }

    let day = time.getDay();
    let date = time.getDate();
    let month = time.getMonth();
    let year = time.getFullYear();

    let result = "";
    let alldays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    for (let i = 0; i < alldays.length; i++) {
        switch (day) {
            case i:
                result = alldays[i];
                break;
        }
    }
    let oupt = "";
    let allmonth = ['January', 'Fabuary', 'March', 'April', 'May', 'June', 'July', 'Agust', 'September', 'October', 'November', 'December'];
    for (let n = 0; n < allmonth.length; n++) {
        switch (month) {
            case n:
                oupt = allmonth[n];
                break;
        }
    }
    let output = '';
    switch (date) {
        case 1:
        case 31:
            output = 'st'
            break;
        case 2:
            output = 'nd'
            break;
        case 3:
            output = 'rd';
            break;
        default:
            output = 'th'

    }

    var change = document.querySelector("h1");
    if (change.style.color == "teal") {
        change.style.color = "red";
    } else {
        change.style.color = "teal";
    }
    let ch = document.querySelector("h2");
    if (ch.style.color == "red") {
        ch.style.color = "teal";

    } else {
        ch.style.color = "red";
    }
    document.getElementById("h3").innerHTML = result + "/" + date + "<sup>" + output + "</sup>" + "/" + oupt + "/" + year
}
setInterval(timer, 1000)
timer();