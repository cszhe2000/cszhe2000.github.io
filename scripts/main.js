let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/dwae86-icon.png') {
      myImage.setAttribute('src', 'images/dog-book.png');
    } else {
      myImage.setAttribute('src', 'images/dwae86-icon.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
	let myName = prompt('please give us your name:');
	if(!myName || myName === null) {
		setUserName();
	} else {
		localStorage.setItem('name', myName);
		myHeading.innerHTML = 'DWAE86 & ' + myName;
	}
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'DWAE86 & ' + storedName;
}

myButton.onclick = function() {
	setUserName();
}
