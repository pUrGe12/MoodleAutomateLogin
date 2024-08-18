function enterUnameAndPass(){
	chrome.storage.local.get(['username', 'password'], (result) => {
    	const username1 = result.username;
    	const password1 = result.password;

		const usernameField = document.getElementById("username");
		const passwordField = document.getElementById("password");
		usernameField.value = username1;
		passwordField.value = password1;
		usernameField.dispatchEvent(new Event('input', { bubbles: true })); 
	    passwordField.dispatchEvent(new Event('input', { bubbles: true }));
	}); 
}
enterUnameAndPass()

function Wait(){
	setTimeout(function() {	
		const submitBtn = document.querySelectorAll("#loginbtn")[0];
		submitBtn.click();
	}, 100);
}

Wait()
