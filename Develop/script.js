document.getElementById('generate').addEventListener('click', () => {
	var num_length
	var lowercase
	var uppercase
	var numeric
	var special

	var lowercase_set = "abcdefghijklmnopqrstuvwxyz"
	var uppercase_set = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
	var numbers_set = "0123456789"
	var punctuation_set = "!@#$%^&*()_+~`|}{[]:;?><,./-="

	while (true) {
		var length = prompt("Type the length of the password", "Length of the password(between 8 - 128 characters)");
		num_length = parseInt(length)

		if (num_length < 8 || num_length > 128) {
			alert("Please enter a valid lenght")
		}
		else {
			break
		}
	}

	while (true) {
		var lowercase = prompt("Include lowercase?(y/n)", "You can only type y or n");
		if (lowercase !== 'y' && lowercase !== 'n') {
			alert("You can only type y or n")
		}
		else {
			break
		}
	}

	while (true) {
		var uppercase = prompt("Include uppercase?(y/n)", "You can only type y or n");
		if (uppercase !== 'y' && uppercase !== 'n') {
			alert("You can only type y or n")
		}
		else {
			break
		}
	}

	while (true) {
		var numeric = prompt("Include numeric?(y/n)", "You can only type y or n");
		if (numeric !== 'y' && numeric !== 'n') {
			alert("You can only type y or n")
		}
		else {
			break
		}
	}


	while (true) {
		var special = prompt("Include special?(y/n)", "You can only type y or n");
		if (special !== 'y' && special !== 'n') {
			alert("You can only type y or n")
		}
		else {
			break
		}
	}

	if (lowercase === 'n' && uppercase === 'n' && numeric === 'n' && special === 'n') {
		alert('You must choose at least one criteria')
	}
	else {
		password_generated = ""
		charSet = ""

		if (lowercase === 'y') {
			charSet += lowercase_set
		}
		if (uppercase === 'y') {
			charSet += uppercase_set
		}
		if (numeric === 'y') {
			charSet += numbers_set
		}
		if (special === 'y') {
			charSet += punctuation_set
		}

		for (let i = 0; i < num_length; i++) {
			password_generated += charSet.charAt(Math.floor(Math.random() * charSet.length))
		}

		document.getElementById("password").value = password_generated
	}
})
