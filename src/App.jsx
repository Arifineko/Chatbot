import { useState } from 'react';
import { ChatInput } from './components/ChatInput';
import './App.css'
import { ChatMessages } from './components/ChatMessages';


function App() {
  const [chatMessages, setChatMessages] = useState([]);
  const [inputMove, setInputMove] = useState(true)

  function moveInput() {
    setInputMove(prev => !prev)
  }

  return (
    <div className="app-container">

      {inputMove &&
        <ChatInput
          chatMessages={chatMessages}
          setChatMessages={setChatMessages}
        />
      }

      {chatMessages.length === 0 ?
        <p className="welcome-text"> Welcome to the chatbot project! Send a message using the textbox below.</p>
        :
        <ChatMessages
          chatMessages={chatMessages}
        />
      }

      {!inputMove &&
        <ChatInput
          chatMessages={chatMessages}
          setChatMessages={setChatMessages}
        />
      }

      <p className='move-input' onClick={moveInput}>Move textbox to bottom</p>
    </div>
  )
}

export default App
