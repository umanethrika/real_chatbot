import React, { useState } from 'react';
import axios from 'axios';
//import './Chatbot.css';  

const Chatbot = () => {
  const [isChatVisible, setChatVisible] = useState(false);

  const toggleChat = () => {
    setChatVisible(!isChatVisible);
  };

  const sendMessage = async () => {
    const userInput = document.getElementById('userInput').value;
    const messagesDiv = document.getElementById('messages');

    if (userInput.trim() !== "") {
      // Display user message in chatbox
      messagesDiv.innerHTML += `
        <div style="padding: 5px; background: #E0F7FA; border-radius: 5px; margin-bottom: 5px;">
          <p style="margin: 0; color: #007BFF;">You: ${userInput}</p>
        </div>
      `;
      
      document.getElementById('userInput').value = '';

      try {
        
        // const response = await axios.post('/api/chat/chat', { message: userInput }, {
        //   headers: {
        //     'Authorization': `Bearer ${localStorage.getItem('token')}`,  
        //   }
        // });
        const response = await axios.post('/api/chat/chat', { message: userInput });
        
       
        const botReply = "This is botresponse";
        
        messagesDiv.innerHTML += `
          <div style="padding: 5px; background: #F1F1F1; border-radius: 5px; margin-bottom: 5px;">
            <p style="margin: 0; color: #000;">Bot: ${botReply}</p>
          </div>
        `;
        
        messagesDiv.scrollTop = messagesDiv.scrollHeight;  // Scroll to the bottom

      } catch (error) {//this is a darunammmm
        console.error('Error during chat:', error);
        messagesDiv.innerHTML += `
          <div style="padding: 5px; background: #F1F1F1; border-radius: 5px; margin-bottom: 5px;">
           
            <p style="margin: 0; color: #000;">Error: Couldn't send message.Please try again later.</p> 
          </div>
        `;
      }
    }
  };

  return (
    <div>
      {/* Chatbot Container */}
      {isChatVisible && (
        <div
          id="chatContainer"
          style={{
            position: 'fixed', 
            bottom: '20px', 
            right: '20px', 
            width: '300px', 
            zIndex: 1000, 
            backgroundColor: '#e0e0e0b8', 
            border: '1px solid #121212', 
            borderRadius: '5px'
          }}
        >
          <div
            id="chatHeader"
            onClick={toggleChat}
            style={{
              background: '#121212',
              color: '#fff',
              padding: '10px',
              cursor: 'pointer',
              borderRadius: '5px 5px 0 0'
            }}
          >
            Chat with Us
          </div>
          <div
            id="chatContent"
            style={{
              padding: '10px',
              background: '#fff',
              border: '1px solid #121212',
              borderRadius: '0 0 5px 5px',
            }}
          >
            <div id="messages" style={{ maxHeight: '150px', overflowY: 'auto', marginBottom: '10px' }}></div>
            <input
              type="text"
              id="userInput"
              placeholder="Type a message..."
              style={{ width: 'calc(100% - 50px)', padding: '5px' }}
            />
            <button
              onClick={sendMessage}
              style={{ background: '#121212', color: '#fff', padding: '5px', border: 'none' }}
            >
              Send
            </button>
          </div>
        </div>
      )}

      {/* Button to open/close the chatbot */}
      <button
        id="openChatBtn"
        onClick={toggleChat}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          backgroundColor: '#121212',
          color: 'white',
          borderRadius: '50%',
          padding: '10px',
          zIndex: 1000,
        }}
      >
        Chat Now
      </button>
    </div>
  );
};

export default Chatbot;
