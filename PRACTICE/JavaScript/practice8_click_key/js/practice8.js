// document = addEventListener("keyup", function (event) {
//     if (event.keyCode == 65) {
//         document.body.style.background = "pink";
//     } else if (event.keyCode == 66) {
//         this.document.body.style.background = "blue"
//     } else if (event.keyCode == 67) {
//         this.document.body.style.background = "teal"
//     } else if (event.keyCode == 68) {
//         this.document.body.style.background = "black"
//     }
// });
document.addEventListener("keyup", function (event) {
    if (event.keyCode == 65) {
        document.body.style.background = "teal"
    }
    if (event.keyCode == 66) {
        document.body.style.background = "pink"
    }

    if(event.keyCode == 67){
        document.body.style.background = "teal"
    }
});