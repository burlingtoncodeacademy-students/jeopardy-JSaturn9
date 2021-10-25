//added url fragment to path to let the program know it's a multiplayer game
let startButt = document.getElementById("start-but");
console.log(startButt);

startButt.addEventListener('click', (evt) => {
    evt.preventDefault();
    document.location = "/html/round-1.html#" + "multiplayer";   
});



