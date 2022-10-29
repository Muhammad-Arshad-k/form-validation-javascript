const form = document.getElementById('form');
const username = document.getElementById('username');
const username2= document.getElementById('username2');
const rd1= document.getElementById("rd1");
const rd2= document.getElementById("rd2");
const gender=document.getElementById("gender");
const email = document.getElementById('email');
const phonenumber = document.getElementById('phonenumber');
const submitbutton=document.getElementById('submitbutton');
const popup=document.getElementById('popup');



form.addEventListener('submit', (e) => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {

	const usernameValue = username.value.trim();
	const username2Value = username2.value.trim();
	const birthdayValue = birthday.value.trim();
    const emailValue = email.value.trim();
	const phonenumberValue = phonenumber.value.trim();


	if(usernameValue === '') {
		setErrorFor(username, 'First name cannot be blank');
	} else if (!isNaN(usernameValue)) {
		setErrorFor(username, 'enter valid name');
	} else {
		setSuccessFor(username);
	}
	if(username2Value === '') {
		setErrorFor(username2, 'Last name cannot be blank');
	} else if (!isNaN(username2Value)) {
		setErrorFor(username2, 'enter valid gender name');
	} else {
		setSuccessFor(username2);
	}
	if(birthdayValue === '') {
		setErrorFor(birthday, 'D-O-B cannot be blank');
	} else {
		setSuccessFor(birthday);
	}

	if(rd1.checked==false&&rd2.checked==false){
		setErrorFor( gender,'chooose a valid gender');
	}
	else{
		setSuccessFor(gender);
	}


	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}
	
	if(phonenumberValue === '') {
		setErrorFor(phonenumber, 'Phone Number cannot be blank');
	} else if (isNaN(phonenumberValue)||phonenumberValue.length!==10) {
		setErrorFor(phonenumber, 'enter valid phone number');
	} else   {
		setSuccessFor(phonenumber);
		openPopup();	
	}
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerHTML = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
//email testing	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function  openPopup(){
 popup.classList.add("open-popup");
}
function  closePopup(){
	popup.classList.remove("open-popup");
}
   
