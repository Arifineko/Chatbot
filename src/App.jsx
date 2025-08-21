import { useEffect, useState } from 'react';
import { ChatInput } from './components/ChatInput';
import './App.css'
import { ChatMessages } from './components/ChatMessages';
import { Chatbot } from 'supersimpledev';


function App() {
  const [chatMessages, setChatMessages] = useState([]);
  const [inputMove, setInputMove] = useState(true)

  useEffect(() => {
    Chatbot.addResponses({
      'goodbye': 'Goodbye. Have a great day!',
      'Give me unique Id': function () {
        return `this is unique id ${crypto.randomUUID()}`
      }
    })
  }, [])

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
