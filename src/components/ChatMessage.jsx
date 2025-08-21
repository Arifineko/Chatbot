import RobotProfileImage from '../assets/robot.png'
import UserProfileImage from '../assets/user.png'
import './ChatMessage.css'

export function ChatMessage({ message, sender }) {
    return (
        <div className={sender === 'robot' ? "robot-message" : "user-message"}>
            {sender === 'robot' &&
                <img src={RobotProfileImage} width="50" />
            }
            <p className="text-message">{message}</p>
            {sender === 'user' &&
                <img src={UserProfileImage} width="50" />
            }
        </div>
    )
}