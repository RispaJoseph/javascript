document.write(("Array")+"<br>");
var animal = ["Dog", "Cat", "Elephant", "Camel", "Tiger"];
document.write(animal + "<br>");
document.write(animal[0]);

document.write("<br>");

animal[0] = "Horse";
document.write(animal)
document.write("<br>");
document.write("<br>");



// to find the lenth of an array

var l = animal.length;
document.write("Length of the array is " + l)
document.write("<br>");
document.write("<br>");


//Accessing all elements using for loop
var animal = ["Dog", "Cat", "Elephant", "Camel", "Tiger"];
for(var i=0; i<l; i++){
    document.write(animal[i] + "<br>");
}
document.write("<br>");


// Adding a new element into the array

animal[5] = "Monkey";
document.write(animal);
document.write("<br>");

// Adding a new element into the array using push
animal.push("Fox");
document.write(animal);
document.write("<br>");


// Deleting elements from array
animal.shift();                     //shift will delete  the first element in the array
document.write(animal)
document.write("<br>");

animal.pop();                       //pop delete the last element in the array
document.write(animal)
document.write("<br>");



animal.splice(3, 1);            //splicing will delete the two elements from 3rd index
document.write(animal)
document.write("<br>");


// Sorting

var nums = [50,80,10,60,70,30,20,40]
nums.sort()
document.write(nums)
document.write("<br>");
document.write(nums[0]+nums[1])
document.write("<br>");
document.write("<br>");

