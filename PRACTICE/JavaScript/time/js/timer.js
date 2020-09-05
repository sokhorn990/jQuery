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
    if (days.getHours() < 12) {
        timer.innerHTML = hours + ":" + minute + ":" + seconds + " " + "AM";
        document.getElementById('message').innerHTML="Goodmorning";
      
    } else  {
        timer.innerHTML = hours + ":" + minute + ":" + seconds + " " + "PM";
        document.getElementById('message').innerHTML="Good Afternoon";
        document.body.style.background = "url(../img/1.jpg) center/cover no-repeat";
   
    }
    if(days.getHours() > 16){
        timer.innerHTML = hours + ":" + minute + ":" + seconds + " " + "PM";
        document.getElementById('message').innerHTML="Good Evening";
        document.body.style.background = "url(../img/1.jpg) center/cover no-repeat";
    }
    if(days.getHours() > 19){
        timer.innerHTML = hours + ":" + minute + ":" + seconds + " " + "PM";
        document.getElementById('message').innerHTML="Good Night";
        document.body.style.background = "url(../img/1.jpg) center/cover no-repeat";
    }

    if (days.getHours() == 12) {
        timer.innerHTML = days.getHours() + ":" + minute + ":" + seconds + " " + "PM";
        document.body.style.background = "url(../img/images.jpg) center/cover no-repeat";
    }
    var color =()=>{
        let col = document.querySelector("h1")
        if (col.style.color=="red"){
            col.style.color="blue";
        }else{
            col.style.color="red";
        
        }
    }

    var colors = () => {
        let col = document.querySelector("h2");
        if (col.style.color == "yellow") {
            col.style.color = "purple"
        } else {
            col.style.color = "yellow"
        }
    }

    setInterval(colors, 1000);
    setInterval(color, 1000);
}
setInterval(timer, 1000);




