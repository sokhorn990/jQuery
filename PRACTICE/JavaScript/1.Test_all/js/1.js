//select chhoose color
function onChange() {
    let colors = document.getElementById("container");
    let container = document.getElementById("colors").value;
    colors.style.background = container;
}
//...............................................................................................................
//type the key
document.addEventListener("keyup", function (event) {
    if (event.keyCode == 65) {
        document.body.style.background = "teal";
    }
    if (event.keyCode == 66) {
        document.body.style.background = "pink";
    }
    if (event.keyCode == 67) {
        document.body.style.background = "black";
    }
});
//...............................................................................................................
//get time 

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
    if (hours > 12) {
        document.getElementById("h1").innerHTML = hours + ":" + minute + ":" + second + " " + "AM";
        document.getElementById("h2").innerHTML = "Good Morning!"
        //document.body.style.background="pink"
        //document.body.style.background = "url(../images/afternoon.jpg) center/cover no-repeat";=>DAK PIC
    }
    if (hours < 12)
        document.getElementById("h1").innerHTML = hours + ":" + minute + ":" + second + " " + "PM";
    document.getElementById("h2").innerHTML = "Good Afternoon!";
    //document.body.style.background="gray" ==>ber dak type key ot kert t 

//...............................................................................................................
    //get month
    let day = time.getDay();
    let month = time.getMonth();
    let year = time.getFullYear();
    let date = time.getDate();
    let answer = "";
    switch (time.getDate()) {
        case 1:
        case 21:
        case 31:
            answer = 'st';
            break;
        case 2:
            answer = 'nd';
            break;
        case 3:
            answer = 'rd';
            break;
        default:
            answer = "th"

    }

    let result = " ";
    let alldays = ['Sunday', 'Monday', 'Tuesday', 'Wendesday', 'Thursday', 'Friday', 'Saturday'];
    for (i = 0; i < alldays.length; i++) {
        switch (day) {
            case i:
                result = alldays[i];
        }
    }
    let allmonths = ['January', 'Fabuary', 'March', 'April', 'May', 'June', 'July', 'Agust', 'Setember', 'October', 'November', 'December'];
    let output = "";
    for (n = 0; n < allmonths.length; n++) {
        switch (month) {
            case n:
                output = allmonths[n];
        }
    }
    document.getElementById("h3").innerHTML = date + "<sup>" + answer + "</sup>" + "/ " + result + "/" + output + "/" + year;

    var colors = document.querySelector("h1");
    if (colors.style.color == "teal") {
        colors.style.color = "red"
    } else {
        colors.style.color = "teal"
    }

    var colc = document.querySelector("h3");
    if (colc.style.color == "green") {
        colc.style.color = "blue"
    } else {
        colc.style.color = "green"
    }
    var nk = document.querySelector("h2");
    if (nk.style.color == "black") {
        nk.style.color = "purple"
    } else {
        nk.style.color = "black"
    }
}


setInterval(timer, 3000)
setInterval(timer)
timer();
