const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting');

function onLoginSubmit(event) {
	event.preventDefault();
	console.log(event);
	loginForm.classList.add('hidden');
}

loginForm.addEventListener('submit', onLoginSubmit);
