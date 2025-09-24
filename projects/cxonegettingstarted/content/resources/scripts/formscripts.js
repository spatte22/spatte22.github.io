function displayJWKSEndpoint () {
	var privateKeyJWTField = document.getElementById('private-key-jwt-field');
	privateKeyJWTField.style.display = 'block';
}

function hideJWKSEndpoint () {
	var privateKeyJWTField = document.getElementById('private-key-jwt-field');
	privateKeyJWTField.style.display = 'none';
}

function displayConfOrPubAppFields() {
	var confOrPubAppFields = document.getElementById('conf-or-pub-app-fields');
	confOrPubAppFields.style.display = 'block';
}

function hideConfOrPubAppFields() {
	var confOrPubAppFields = document.getElementById('conf-or-pub-app-fields');
	confOrPubAppFields.style.display = 'none';
}

/*document.getElementById('form-submit-button').addEventListener("click", function(event) {
	event.preventDefault()
});*/

function submitForm() {
	document.getElementById('form-thank-you').style.display = 'block';
	var appForm = document.getElementById("form");
	appForm.style.display = 'none';
}