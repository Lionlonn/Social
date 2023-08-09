import React from "react"
import './dialogs.scss'
import  DialogItem  from './Dialogitem/dialogItem.jsx'
import  MessageItem  from './MessageItem/messageItem.jsx'


const Dialogs = (props) => {
    const state = props.messagePage

    const dialogElement = state.dialogs.map(user => <DialogItem name={user.name} id={user.id}/>)
    const messageElement = state.messages.map(user => <MessageItem message={user.message} id={user.id}/>)

    let newMessageBody = state.newMssageBody;
    

    const onSendMessageClick = () => {
        props.sendMessage()
    }
    const onNewMessageChange = (e) => {
        let body = e.target.value;
        props.UpdateNewMessageBody(body)
       
    }
    
    return (
        <div className="chat">
            <div className="dialogs">
                <div className="dialog-item">
                    { dialogElement }
                </div>
                <div className="messages">
                    { messageElement }
                    <div className="message-send">
                        <textarea placeholder="Enter your message"
                            onChange = {onNewMessageChange}
                            value = {newMessageBody}
                            ></textarea>
                        <button onClick={ onSendMessageClick }>Отправить</button>
                    </div>
                </div>
            </div> 
        </div>
    )
}


export default Dialogs