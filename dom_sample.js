var a = document.getElementById("head1");
a.innerHTML = "Learn JavaScript";
a.style.color = "blue";


var b = document.getElementsByClassName("test");
b[0].style.color = "red";
b[1].style.color = "green";
b[0].innerHTML = "This is nice!";


var c = document.getElementsByTagName("h1");
c[1].style.color = "orange";

// ........................................................................

var d = document.getElementsByName("text")[0];
var e = document.getElementById("head2")

function message(){
    e.innerHTML = "Hello " + d.value;
}



// querySelector

// var f = document.querySelectorAll("h2");
// f[0].innerHTML = "Learn Html";
// f[1].style.color = "red";

// using class
var g = document.querySelectorAll(".hclass");
g[0].style.color = "cyan";
g[1].innerHTML = "Learn Java";


// using Id
var h = document.querySelector("#head3");
g[2].innerHTML = "Learn Python"




// .................................................................
// DOM create and remove Elements

var heading = document.createElement("h1");

function create(){
    heading.innerHTML = "Hello World";
    document.body.appendChild(heading);
} 


function remove(){
    heading.remove();
}




// ..................................................................
// Create Event
var heading = document.getElementById("head4");
var btn = document.getElementById("btn");

btn.addEventListener("click", changeColor);

heading.addEventListener("mouseover",changeBG)

function changeColor(){
    heading.style.color = "red";
}

function changeBG(){
    heading.style.backgroundColor = "blue";
}