// document.getElementById("John").addEventListener("click", function(){var one = new Audio("sounds/Konodioda.mp3") one.play()});
// Creating the sound files
var Johnathan = new Audio("sounds/Johnathan.mp3");
var zawarudo = new Audio("sounds/zawarudo.mp3");
var OMG = new Audio("sounds/OMG.mp3");
var dio = new Audio("sounds/Konodioda.mp3");
// document.addEventListener("keydown", function() {dio.play()});
// Adding the event listeners
document.getElementById("John").addEventListener("click", function() {dio.play()});
document.getElementById("Dio").addEventListener("click", function() {zawarudo.play()});
document.getElementById("Jose").addEventListener("click", function() {OMG.play()});
document.getElementById("konodio").addEventListener("click", function() {dio.play()});




// initializing event listener with function
document.addEventListener("keydown", function() {
    playsound(event.key);
})


// the function to play the sounds
function playsound (key) {
    switch(key) {
        case "d":
            dio.play();
        break;

        case "z":
            zawarudo.play();
        break;

        case "o":
            OMG.play();
        break;

        case "k":
            dio.play();
        break;

        default:

    }
}


// switch("key") {
//     case "d":
//         dio.play();
//     break;
    
//     case "o":
//         OMG.play();
//     break;

//     case "z": 
//         zawarudo.play();
//     break;

//     case "j":
//         dio.play();
//     default:
// }