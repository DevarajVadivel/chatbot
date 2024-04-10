const chatMessages = document.querySelector('.chat-messages');
const chatInput = document.querySelector('#chat-input');
const Input_container = document.querySelector('.input-container');

const sendButton = document.querySelector('.send-message-icon');
const chat_container = document.querySelector('.chat-container');
const chat_container_close = document.querySelector('.chat-header img');

const chatBot_icon = document.querySelector('.chatbot_icon');



// Sample responses for the chatbot
const responses = [
  'Hello! How can I assist you today?',
  'I\'m an AI chatbot designed to help you with your queries.',
  'Unfortunately, I don\'t have enough information to answer your question.',
  'Thank you for your message. I\'ll forward your query to a human representative.'
];




chatBot_icon.addEventListener("click",()=>{

  // chat_container.style.display = "flex";
  chat_container.style.transform ="translateX(0%)"

})

chat_container_close.addEventListener("click",()=>{

  // chat_container.style.display = "none";
  chat_container.style.transform ="translateX(150%)"
})


chatInput.addEventListener("input",(e)=>{

  let prompt = e.target.value;

    if (prompt.length > 0){
      sendButton.style.display ="flex"
    }else{
      sendButton.style.display ="none"
    }
})

const maxHeight = 120; // Set a specific max-height value
chatInput.addEventListener('input', function(e) {

  this.style.height = 'auto';
  this.style.height = (this.scrollHeight) + 'px';

  // Limit the maximum height
  // const maxHeight = parseInt(window.getComputedStyle(this).getPropertyValue('max-height'));

  console.log("scrollHeight",this.scrollHeight);
  console.log("maxHeight",maxHeight);

  if (this.scrollHeight > maxHeight) {
    this.style.overflowY = 'scroll';
    this.style.height = maxHeight + 'px';
  } else {
    this.style.overflowY = 'hidden';
  }

  let prompt = e.target.value;

    if (prompt.length > 0){
      sendButton.style.display ="flex"
      Input_container.classList.add("focus_shadow")
    }else{
      sendButton.style.display ="none"
      Input_container.classList.remove("focus_shadow")
    }

});



// Function to display a message in the chat
function displayMessage(message, sender) {

  const messageDiv = document.createElement('div');

  messageDiv.classList.add("messageBoxContainer")

  const senderClass = sender === 'user' ? 'sender_user' : 'sender_bot';
  const sendericon = sender === 'user' ? '../assets/user.png' : '../assets/robot.png';

  messageDiv.innerHTML = `

    <div class="${senderClass}">
    <img src="${sendericon}" height="25px" width="25px">
     <p >${sender}</p>
    </div>
    <p class="${sender}" >${message}</p>
  `

  // chatMessages.appendChild(messageSenderName);
  chatMessages.appendChild(messageDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;
  sendButton.style.display ="none"
}

// Function to generate a random response from the chatbot
function getRandomResponse() {
  return responses[Math.floor(Math.random() * responses.length)];
}

// Event listener for sending a message
sendButton.addEventListener('click', () => {
  const message = chatInput.value.trim();
  if (message) {
    displayMessage(message, 'user');
    const response = getRandomResponse();
    displayMessage(response, 'chitti_the_bot');
    chatInput.value = '';
  }
});

// Display the initial greeting from the chatbot
displayMessage(getRandomResponse(), 'chitti_the_bot');