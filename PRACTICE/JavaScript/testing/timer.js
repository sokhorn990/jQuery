var timer = () => {
    let days = new Date();
    let hours = (days.getHours() % 12).toString();
    let minute = days.getMinutes().toString();
    let seconds = days.getSeconds().toString();

    let day = days.getDay(); // day
    let displayDay = " ";

    let month = days.getMonth(); // month
    let displayMonth = "";

    switch (day) {

        case 0:
            displayDay = "Sunday";
            break;

        case 1:
            displayDay = "Monday";
            break;

        case 2:
            displayDay = "Tuesday";
            break;

        case 3:
            displayDay = "Wednesday";
            break;

        case 4:
            displayDay = "Thursday";
            break;

        case 5:
            displayDay = "Friday";
            break;

        case 6:
            displayDay = "Sunday";
            break;
    }

    switch (month) {
        case 0:
            displayMonth = "January";
            break;
        case 1:
            displayMonth = "Fabruay";
            break;
        case 2:
            displayMonth = "March";
            break;
        case 3:
            displayMonth = "April";
            break;
        case 4:
            displayMonth = "May";
            break;
        case 5:
            displayMonth = "June";
            break;
        case 6:
            displayMonth = "July";
            break;
        case 7:
            displayMonth = "Agust";
            break;

        case 8:
            displayMonth = "Setember";
            break;
        case 9:
            displayMonth = "October";
            break;
        case 10:
            displayMonth = "November";
            break;
        case 11:
            displayMonth = "December";
            break;
    }

    let date = document.getElementById("date");
    date.innerHTML = displayDay + "/" + displayMonth +"/"+ days.getFullYear();

    if (hours.length < 2) {
        hours = "0" + hours;
    }
    if (minute.length < 2) {
        minute = "0" + minute;
    }


    let timer = document.getElementById("timer");
    if (days.getHours < 12) {
        timer.innerHTML = hours + ":" + minute + ":" + seconds + " " + "AM";
        document.getElementById('message').innerHTML="Goodmorning";
        document.body.style.background="red";
    } else {
        timer.innerHTML = hours + ":" + minute + ":" + seconds + " " + "PM";
        document.getElementById('message').innerHTML="Good Afternoon";
        document.body.style.background="black";
    }

    if (days.getHours == 12) {
        timer.innerHTML = days.getHours + ":" + minute + ":" + seconds + " " + "PM";
    }

}
setInterval(timer, 1000);



