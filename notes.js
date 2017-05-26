window.onload=function(){
  document.getElementById("overlay").innerHTML=localStorage.getItem("a");
}
function on() {
    document.getElementById("overlay").style.display = "block";
}

function off() {
    document.getElementById("overlay").style.display = "none";
}
// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

function disp(){
  modal.style.display="block";
  off();
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        off();
    }
}
var b="<br>";
function calloverlay(){
  document.getElementById("overlay").innerHTML=document.getElementById("overlay").innerHTML+document.getElementById("text").value+b;
  document.getElementById("text").value="";
  modal.style.display="none";
  off();
}
function clr(){
  document.getElementById("overlay").innerHTML="";
}
var a="";
function save(){
  a=document.getElementById("overlay").innerHTML;
  localStorage.setItem("a", a);
  alert("Saved Successfully");
  off();
}
