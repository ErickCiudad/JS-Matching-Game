var numberOfPics = 5;
var theLeftSide = document.getElementById('leftSide');


var p = Math.random() * 400;
var m = Math.round(p);
//margin top position

var a = Math.random() * 100;
var b = Math.round(a);
//margin left position

function img(){
var elem = document.createElement("img");
elem.src = 'doughnut.gif';
elem.style.left = m + "px";
elem.style.top = b + "%";
elem.id = "findTheImage"
elem.addEventListener('click', imgTwo())
document.getElementById("leftSide").appendChild(elem);
    }
img();

function imgTwo(){
  for(var i = 0; i < 5; i++){
    var p = Math.random() * 400;
    var m = Math.round(p);
    //margin top position

    var a = Math.random() * 100;
    var b = Math.round(a);
    //margin left position
    var elem = document.createElement("img");
    elem.src = 'doughnut.gif';
    elem.style.left = m + "px";
    elem.style.top = b + "%";
    elem.id = "crowdImage"
    document.getElementById('leftSide').appendChild(elem);

    // elem.addEventListener('click', imgTwo())
    //SECOND ELEMENT
    var elem2 = document.createElement("img");
    elem2.src = 'doughnut.gif';
    elem2.style.left = m + "px";
    elem2.style.top = b + "%";
    elem2.id = "crowdImage"
    document.getElementById('rightSide').appendChild(elem2);

    // document.getElementById("rightSide").appendChild(elem);
  }
  ///Right Side Now


}
