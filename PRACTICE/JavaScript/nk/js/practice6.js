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
        document.querySelector("h2").innerHTML = "Good Morniing!";
    } else {
        document.getElementById("h1").innerHTML = hours + ":" + minute + ":" + second + " " + "PM";
        document.querySelector("h2").innerHTML = "Good Afternoon!";
    }
    if (time.getHours() > 16) {
        document.getElementById("h1").innerHTML = hours + ":" + minute + ":" + second + " " + "PM";
        document.querySelector("h2").innerHTML = "Good Evening!";
    }
    if (time.getHours() > 19) {
        document.getElementById("h1").innerHTML = hours + ":" + minute + ":" + second + " " + "PM";
        document.querySelector("h2").innerHTML = "Good Night!";
    }
    //document.body.style.background = "#" + hours+ minute + second;
    let day = time.getDay();
    let month = time.getMonth();
    let year = time.getFullYear();

    let output = "";
    let allMonth = ['january', 'faburay', 'March', 'April', 'May', 'June', 'Junly', 'August', 'September', 'Octorber', 'November', 'December'];
    for (let k = 0; k < allMonth.length; k++) {
        switch (month) {
            case k:
                output = allMonth[k];
                break;
        }
    }
    let result = "";
    let allDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    for (let i = 0; i < allDay.length; i++) {
        switch (day) {
            case i:
                result = allDay[i];
                break;
        }
        document.getElementById("h3").innerHTML = result + "/" + output + "/" + year;
        let spacialDay = "";
        switch (day) {
            case 1:
                spacialDay = "This time is Aerobic!";
                break;
            case 3:
                spacialDay = "This time is Sport!";
                break;
            case 5:
                spacialDay = "This time is Movie!";
                break;
            case 0:
            case 6:
                spacialDay = "Nice weekend!";
                break;
            case 2:
            case 4:
                spacialDay = "Normal Day!"

        }
        document.getElementById("h4").innerHTML = spacialDay;
    }
    var colors = document.querySelector("h1");
    if (colors.style.color == "teal") {
        colors.style.color = "red"
    } else {
        colors.style.color = "teal"
    }
    var cok = document.querySelector("h2");
    if (cok.style.color == "blue") {
        cok.style.color = "orange";
    } else {
        cok.style.color = "blue"
    }
    var nk = document.querySelector("h3");
    if (nk.style.color == "purple") {
        nk.style.color = "gray"
    } else {
        nk.style.color = "purple";
    }
    document.addEventListener("keyup", function (event) {
        if (event.keyCode == 66) {
            document.body.style.background = "teal"
        }
    });
document.addEventListener("keyup",function(de){
    if(de.keyCode==67){
        document.body.style.background="green"
    }
})
}

setInterval(timer, 1000);
timer();

