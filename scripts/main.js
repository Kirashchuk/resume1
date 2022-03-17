// var myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello world!';

// alert('Привіт');

// document.querySelector('html').onclick = function() {
//     alert('Ouch! Stop poking me!');
// }


// var myImage = document.querySelector('img');

// myImage.onclick = function() {
//     var mySrc = myImage.getAttribute('src');
//     if(mySrc === 'img/photo_2021-10-22_20-54-24.jpg') {
//       myImage.setAttribute ('src','img/photo_2021-06-21_22-08-55.jpg');
//     } else {
//       myImage.setAttribute ('src','img/photo_2021-10-22_20-54-24.jpg');
//     }
// }


var myButton = document.querySelector('button');
var myHeading = document.querySelector('h2');
function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Вітаю, ' + myName;
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Вітаю,' + storedName;
}
myButton.onclick = function() {
  setUserName();
}