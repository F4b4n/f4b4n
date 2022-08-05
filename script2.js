/* Toggle between adding and removing the class to topnav when the user clicks on the icon */
function navFunction() {
  let x = document.getElementById("topNav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

//IMG changer

let index = 0;
change();

function change() {

  //Collect all images with class 'slides'
  let x = document.getElementsByClassName('slides');

  //Set all the images display to 'none' (invisible)
  for (let i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }

  //Increment index letiable
  index++;

  //Set index to 1 if it's greater than the amount of images
  if (index > x.length) {
    index = 1;
  }

  //set image display to 'block' (visible)
  x[index - 1].style.display = "block";

  //set loop to change image every 3000 milliseconds (3 seconds)
  setTimeout(change, 3000);
}

//Get the button
const mybutton = document.getElementById("upButton");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function scrollUp() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//
//let szoveg = {
//   "nev": "0",
//   "bekezdes1": "1",
//   "bekezdes2": "2",
//   "bekezdes3": "3",
//   "bekezdes4": "4",
//   "bekezdes5": "5",
//   "bekezdes6": "6",
//   "bekezdes7": "7"
// }

// document.addEventListener('DOMContentLoaded', () => {
// let zones = document.querySelectorAll('[data-key]');
//   console.log(zones);
//       applyStrings(zones);
// });

// function applyStrings(containers) {
//     containers.forEach(element => {
//             let key = element.getAttribute('data-key');    
          
//             if (key) {
//                 element.textContent = szoveg[key];
//             }
//         });
    
// }