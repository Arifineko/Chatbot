import RobotProfileImage from '../assets/robot.png'
import UserProfileImage from '../assets/user.png'
import './ChatMessage.css'

export function ChatMessage({ message, sender, timeSent }) {

    return (
        <div className={sender === 'robot' ? "robot-message" : "user-message"}>
            {sender === 'robot' &&
                <img src={RobotProfileImage} width="50" />
            }
            <div className='container-message'>
                <p className='message'>{message}</p>
                <p className='time-message'>{timeSent}</p>
            </div>
            {sender === 'user' &&
                <img src={UserProfileImage} width="50" />
            }
        </div>
    )
}