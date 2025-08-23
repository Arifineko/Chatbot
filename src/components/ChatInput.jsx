import { useState } from 'react';
import { Chatbot } from 'supersimpledev'
import LoadingSpinner from '../assets/loading-spinner.gif'
import './ChatInput.css'
import dayjs from 'dayjs'

export function ChatInput({ chatMessages, setChatMessages }) {

    const [inputText, setInputText] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    function saveInputText(event) {
        setInputText(event.target.value)
    }

    async function sendMessage() {

        const time = dayjs().valueOf();

        const timeMessage = dayjs(time).format('h:mma')

        if (isLoading || inputText === "") {
            return
        }

        setIsLoading(true)
        setInputText('');


        const newChatMessages = [
            ...chatMessages,
            {
                message: inputText,
                sender: 'user',
                id: crypto.randomUUID(),
                timeSent: timeMessage
            }
        ]

        setChatMessages(newChatMessages);
        setChatMessages([
            ...newChatMessages,
            {
                message: <img className="loading" src={LoadingSpinner} />,
                sender: 'robot',
                id: crypto.randomUUID()
            }
        ]);


        const response = await Chatbot.getResponseAsync(inputText);

        setChatMessages([
            ...newChatMessages,
            {
                message: response,
                sender: 'robot',
                id: crypto.randomUUID(),
                timeSent: timeMessage
            }
        ]);

        setIsLoading(false)
    }

    function keyboardFeature(event) {
        if (event.key === 'Enter') {
            sendMessage();
        } else if (event.key === 'Escape') {
            setInputText('');
        }
    }

    function clearMessages() {
        setChatMessages([])
    }

    return (
        <div className='container-input'>
            <input
                placeholder="Send a message to Chatbot"
                size="30"
                onChange={saveInputText}
                onKeyDown={keyboardFeature}
                value={inputText}
                className="input-message"
            />
            <button
                onClick={sendMessage}
                className="send-button"
            >Send</button>
            <button
                onClick={clearMessages}
                className='clear-button'
            >Clear</button>
        </div>
    )
}

