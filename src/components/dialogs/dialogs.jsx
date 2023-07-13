import React from "react"
import './dialogs.scss'
// import { Link, useParams } from "react-router-dom"
import  DialogItem  from './Dialogitem/dialogItem.jsx'
import  MessageItem  from './MessageItem/messageItem.jsx'


const Dialogs = (props) => {
    const newMessage = React.createRef();

    const onMessageClick = () => {
        let text = newMessage.current.value;
        alert(text)
    }
    const dialogElement = props.state.dialogs.map(user => <DialogItem name={user.name} id={user.id}/>)
    const messageElement = props.state.messages.map(user => <MessageItem message={user.message} id={user.id}/>)
    return (
        <div className="chat">
            <div className="dialogs">
                <div className="dialog-item">
                    { dialogElement }
                </div>
                <div className="messages">
                    { messageElement }
                    <div className="message-send">
                        <textarea ref={ newMessage }></textarea>
                        <button onClick={ onMessageClick }>Отправить</button>
                    </div>
                </div>
            </div> 
        </div>
    )
}


export default Dialogs