// Select DOM Items
// What is DOM?
// The standered for documents
// What is querySelector?
// Sets a value for classes 
// WHat other methods are there for selecting "DOM Items"
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');

// Set Initial State Of Menu
// initial state is false
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);
// listenn for the menuBtn event of a click, if it occurs have togglemenu triggered

//Write a comment abour what the function is doing
function toggleMenu() {


  // If showmenu 
    if (showMenu === false) {
    menuBtn.classList.add('close');
    menu.classList.add('show');
    menuNav.classList.add('show');
    menuBranding.classList.add('show');

    // Use For loop instead ***********************
    navItems.forEach(item => item.classList.add('show'));

    // Set Menu State
    showMenu = true;
  } else {
    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    menuBranding.classList.remove('show');
    navItems.forEach(item => item.classList.remove('show'));

    // Set Menu State
    showMenu = false;
  }
}
// let subway = true;
// let x = 2;
// let y = 0; 
// let z = x + y;

// function sum() {
//   /* 
//   -if the subway variable is true then do the following
//     -if the x-variable is greater than 0
//     - than do x + y
//     -In all other cases 
//     -do x-y 
//   -if all other cases
//   -run subway is not true
//   */
//   if (subway === true) {
//     if (x > 0) {
//        x + y
//     } else {
//        x - Y
//     }
//   console.log(z);
//   } else {
//     console.log('subway is not true')
//   }
// }

// sum()
