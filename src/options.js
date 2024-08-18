document.getElementById('credentials-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  chrome.storage.local.set({ username, password }, function() {
    // Blank the screen
    document.body.innerHTML = ''; 

    const messageContainer = document.createElement('div');
    messageContainer.style.display = 'flex';
    messageContainer.style.justifyContent = 'center';
    messageContainer.style.alignItems = 'center';
    messageContainer.style.height = '100vh';  
    messageContainer.style.backgroundColor = '#f0f4f8';
    messageContainer.style.transition = 'opacity 0.5s ease';
    messageContainer.style.opacity = '0';

    const messageBox = document.createElement('div');
    messageBox.style.backgroundColor = '#ffffff';  
    messageBox.style.padding = '20px 40px';
    messageBox.style.borderRadius = '10px';  
    messageBox.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)'; 
    messageBox.style.textAlign = 'center';

    const messageText = document.createElement('h1');
    messageText.textContent = 'Credentials Saved';
    messageText.style.color = '#333333';  
    messageText.style.marginBottom = '10px';

    const subText = document.createElement('p');
    subText.textContent = 'Your credentials have been securely added to Chrome storage.';
    subText.style.color = '#666666'; 
    subText.style.fontSize = '18px';

    messageBox.appendChild(messageText);
    messageBox.appendChild(subText);
    messageContainer.appendChild(messageBox);

    document.body.appendChild(messageContainer);

    setTimeout(() => {
      messageContainer.style.opacity = '1';
    }, 100);
  });
});