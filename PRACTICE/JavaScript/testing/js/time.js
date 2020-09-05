var timer = () => {
    let time = new Date();
    let hours = (time.getHours() % 12).toString();
    let minute = time.getMinutes().toString()
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
    document.getElementById("h1").innerHTML = hours + ":" + minute + ":" + second;
    if (hours < 12) {
        document.getElementById("h1").innerHTML = hours + ":" + minute + ":" + second + "AM";
        document.getElementById("h3").innerHTML = "Good Night";
    } else {
        document.getElementById("h1").innerHTML = hours + ":" + minute + ":" + second + "PM";
        document.getElementById("h3").innerHTML = "Good Afternoon";
    }

    let result = "";
    let day = time.getDay();
    let alldays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    for (i = 0; i < alldays.length; i++) {
        switch (day) {
            case i:
                result = alldays[i];
        }
    }
    let ouput = "";
    let month = time.getMonth();
    let allmonth = ['jan', 'Fab', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Agu', 'Set', 'Oct', 'Nov', 'Dec'];
    for (o = 0; o < allmonth.length; o++) {
        switch (month) {
            case o:
                ouput = allmonth[o];
                break;
        }
    }
   
var color ="";
let changeColor = document.getElementById("h1");
if(changeColor=="teal"){
    document.getElementById("h2")=red;
}else{
    document.getElementById("h2")=teal;
}

    let year = time.getFullYear();
    document.getElementById("h2").innerHTML = result + "/" + ouput + "/" + year;

}

setInterval(timer, 1000);
timer();