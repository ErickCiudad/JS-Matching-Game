var numberOfPics = 5;
var theLeftSide = document.getElementById('leftSide');

var difficulty = 5;

function img(){
  //randomly generates points
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
elem.id = "findTheImage"
document.getElementById("leftSide").appendChild(elem);
document.getElementById('findTheImage').onclick = function(){
  // confirm('Got it!');//Working in this

  //This creates a variable and uses it to grab every single img tag, then uses
  //a loop to delete them one by one until it is set to 0, clearing the page
  var images = document.getElementsByTagName('img');
  while(images.length > 0) {
    images[0].parentNode.removeChild(images[0]);
  }
// regenerates special image
  img();
  //regenerates crowd images with increasing difficulty
  imgTwo();
}
    }


function imgTwo(){
  for(var i = 0; i < difficulty; i++){
    var p = Math.random() * 400;
    var m = Math.round(p);
    //margin top position

    var a = Math.random() * 100;
    var b = Math.round(a);
    //margin left position

    //clearing page
    // elem.parentNode.removeChild(elem); deletes

    var elem3 = document.createElement("img");
    elem3.src = 'doughnut.gif';
    elem3.style.left = m + "px";
    elem3.style.top = b + "%";
    elem3.id = "crowdImage"
    document.getElementById('leftSide').appendChild(elem3);

    // elem.addEventListener('click', imgTwo())
    //SECOND ELEMENT RIGHT SIDE
    var elem2 = document.createElement("img");
    elem2.src = 'doughnut.gif';
    elem2.style.left = m + "px";
    elem2.style.top = b + "%";
    elem2.id = "cImage"
    document.getElementById('rightSide').appendChild(elem2);

    // document.getElementById("rightSide").appendChild(elem);
  }
  difficulty = difficulty * 2;
}


//spawns special image
img();
//spawns five original crowd images
imgTwo();

// document.getElementById('thisTag').style.color = "red";
// elem.parentNode.removeChild(elem);
