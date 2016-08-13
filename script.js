var numberOfPics = 5;
var theLeftSide = document.getElementById('leftSide');


function img(){

var elem = document.createElement("img");
elem.src = 'https://pbs.twimg.com/profile_images/473506797462896640/_M0JJ0v8.png';
document.getElementById("leftSide").appendChild(elem);
    }
img();
