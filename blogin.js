const loginButton = document.getElementById("login-button");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");

loginButton.addEventListener("click", (event) => {
	event.preventDefault();

	const username = usernameInput.value.trim();
	const password = passwordInput.value.trim();

	// Perform login validation here

	// Clear input fields after successful login
	if (loginSuccessful) {
		usernameInput.value = "";
		passwordInput.value = "";
	}
});



