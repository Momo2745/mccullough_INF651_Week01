// Image switcher code

let myImage = document.querySelector('img');

myImage.onclick = function()  {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png') {
        myImage.setAttribute ('src','images/firefox2-icon.png');
    } else {
        myImage.setAttribute ('src','images/firefox-icon.png');
    }
}

// Personalized welcome message code 

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName(Morgan) {
    let myName = prompt('Please enter your name.');
    if(!myName) {
        setUserName(Morgan);
    } else {
        localStorage.setItem('name', Morgan);
        myHeading.innerHTML = 'Mozilla is cool, ' + myName;
    }
}

if(!localStorage.getItem('Morgan')) {
    setUserName(Morgan);
} else {
    let storedName = localStorage.getItem('Morgan');
    myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
    setUserName(Morgan);
}