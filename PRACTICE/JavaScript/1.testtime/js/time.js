var timers = () => {
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

    if (time.getHours() === 12) {
        document.getElementById("date").innerHTML = hours + ":" + minute + ":" + second;
    }
    if (hours < 12) {
        document.getElementById("date").innerHTML = hours + ":" + minute + ":" + second + " " + "PM";
        document.getElementById("good").innerHTML = "Good Afternoon!"
    } else {
        document.getElementById("date").innerHTML = hours + ":" + minute + ":" + second + " " + "AM";
        document.getElementById("good").innerHTML = "Good Mornng!"
    }
    let day = time.getDay();
    let date = time.getDate();
    let year = time.getFullYear();
    let dates = time.getDate();

    let result = "";
    let allday = ['Sunday', 'Mondday', 'Tuesday', 'Wendnesday', 'Thrursday', 'Friday', 'Saturday'];
    for (i = 0; i < allday.length; i++) {
        switch (day) {
            case i:
                result = allday[i];
        }
    }
    let output = " ";
    let allmonth = ['January', 'Fabuary', 'March', 'April', 'May', 'June', 'July', 'August', 'Setember', 'October', 'November', 'Deceamber'];
    for (p = 0; p < allmonth.length; p++) {
        switch (date) {
            case p:
                output = allmonth[p];
        }
    }
    var change = () => {
        let colors = document.querySelector("h1");
        if (colors.style.color == "teal") {
            colors.style.color = "orange";
        } else {
            colors.style.color = "teal";
        }
    }
    var changeColor = () => {
        let colors = document.querySelector("h2");
        if (colors.style.color == "red") {
            colors.style.color = "blue";
        } else {
            colors.style.color = "red";
        }
    }
    var color = () => {
        let col = document.querySelector("h3");
        if (col.style.color == "yellow") {
            col.style.color = "purple"
        } else {
            col.style.color = "yellow"
        }
    }

    let top = "";
    switch (time.getDate()) {
        case 1:
        case 21:
        case 31:
            top = "St";
            break;
        case 2:
            top = "nd";
            break;
        case 3:
        case 23:
            top = "rd";
            break;
        default:
            top = "th";
    }

    setInterval(color, 1000)
    setInterval(changeColor, 1000);
    setInterval(change, 1000);
    document.getElementById("timer").innerHTML = result + " " + dates + " " + "<sup>" + top + "</sup>" + " " + output + " " + year;
}
setInterval(timers, 1000);