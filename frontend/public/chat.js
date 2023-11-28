function sendMessage() {
    chatDiv = document.getElementById('chatResponse');
    userInput = document.getElementById('userInput');
    const userMessage = userInput.value;
    appendMessage('user', userMessage);
    userInput.value = '';

    
    //.....START:: This is Hadcoded. Once the backend is up and running, then you need to comment the below code.
        const botResponse = 'This is the response from AI. Howz That !!';
        appendMessage('bot', botResponse);
    // ...... END

    // Send user message to the server and get the response
    fetch('/ask', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `user_message=${userMessage}`,
    })
    .then(response => response.json())
    .then(data => {
        const botResponse = data.response;
        //alert(botResponse);
        appendMessage('bot', botResponse);
    })
    .catch(error => console.error('Error:', error));
}

function appendMessage(sender, message) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `${sender}-message`;
    messageDiv.innerText = message;

    // Add styles for the message div
    messageDiv.style.border = '1px solid #ccc'; // Add a border
    messageDiv.style.backgroundColor = sender === 'bot' ? '#D1FFBD' : '#e6f7ff'; // Set background color
    messageDiv.style.padding = '10px'; // Add padding

    chatDiv.appendChild(messageDiv);
    // Listen for new messages being added to the chat container
    chatDiv.addEventListener('DOMNodeInserted', scrollToBottom);
        // Initially scroll to the bottom when the chat container is loaded
    scrollToBottom();
}


const scrollToBottom = () => {
  //alert(chatContainer.scrollHeight)
  chatContainer.scrollTop = 1000;
};


