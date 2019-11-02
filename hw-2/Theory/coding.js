function display2_1() {
  var myanswer  = "My answer goes here: <br><br> 1. undefined <br> 2. true <br> 3. false <br><br> The first case with the double equals sign '==' is checking to see if the two values are loosely equal (may be of different types such as 0 and false). The second case with the triple equals sign '===' is checking if the two variables are exactly equal (same value and same type). Undefined and null are loosely equal but not exactly equal in type." // TODO 2.1: Fill in Answer here after the :
  document.getElementById("21answer").innerHTML = myanswer; // Do not change
}
function display2_2() {
  var myanswer  = "My answer goes here: 'Use strict' makes it mandatory for you to declare variables, so you would get an error since x isn't defined. Removing 'use strict' would get rid of the error since regular javascript allows you to use variables without having declared them." // TODO 2.2: Fill in Answer here
  document.getElementById("22answer").innerHTML = myanswer; // Do not change
}

function display2_5() {
  var myanswer  = "My answer goes here: I am able to see these child nodes even though they are not visible on the html page because they are hidden with the css 'display: none' style. This hides them, but the elements still exist in the DOM so I can access them through javascript."  // TODO 2.5: Fill in Answer here
  document.getElementById("25answer").innerHTML = myanswer; // Do not change
}

function countDiv() { // Do not add or remove lines to this function
    var divs = document.getElementsByTagName('div'); // TODO: Question 2.3: Use the document Object to get the number of divs in the HTML page. Replace dummyMethod with the correct one.
    alert("Number of divs in this page is: " + divs.length); // Do not change 
}

function makeOrange() { // Do not add or remove lines to this function
    var narutos = document.getElementsByName('naruto'); // TODO: Question 2.4: Use the document Object to get all tags named "naruto" in the HTML page. Replace dummyMethod with the correct one.
    for(var i=0; i< narutos.length; i++) { // Do not change
        narutos[i].style.color = 'orange'; // Do not change
    }
}

function getChildrenTags() { // Do not add or remove lines to this function
  var children = document.getElementById("div_1134").children; // TODO: Question 2.5 Use the appropriate function to get all the children of a div named 'div_1134'
  var tagNames = ""; // Do not change
  for (var i = 0; i < children.length; i++) {// Do not change
    console.log(children[i].tagName);// Do not change
    tagNames += children[i].tagName +", " ;// Do not change
  }// Do not change
  alert(children.length); // Do not change
  alert("The tags that I found are: " + tagNames);// Do not change
}

