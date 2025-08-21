import { useAutoScroll } from "../hooks/useAutoScroll"
import { ChatMessage } from "../components/ChatMessage"
import './ChatMessages.css'

export function ChatMessages({ chatMessages }) {

    const chatMessagesRef = useAutoScroll(chatMessages)

    return (
        <div className="messages-container"
            ref={chatMessagesRef}>

            {chatMessages.map((chatMessage) => {
                return (
                    <ChatMessage
                        message={chatMessage.message}
                        sender={chatMessage.sender}
                        key={chatMessage.id}
                    />
                )
            })}
        </div>
    )
}