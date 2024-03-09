document.write(("Function")+"<br>");
function greetings(){
    document.write("Good Morning"+ "<br>");
}
greetings();

document.write("<br>");

// ...........................................


function good(name){
    document.write("Hello " + name + "<br>");
}

good("Rispa");
good("Lola");
document.write("<br>");

// ...........................................

function sum(n1,n2){
    document.write(n1+n2);
}
sum(10,20);
document.write("<br>");

// ...........................................

function sum2(n1,n2){
    return n1+n2;
}
var result = sum2(50,30);
document.write(result);
document.write("<br>");
document.write("<br>");