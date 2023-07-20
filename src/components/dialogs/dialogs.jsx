import React from "react"
import './dialogs.scss'
import { Link, Route, useParams, Routes } from "react-router-dom"
import  DialogItem  from './Dialogitem/dialogItem.jsx'
import  MessageItem  from './MessageItem/messageItem.jsx'
import { updateNewMessageBodyCreator, sendMessageCreator} from '../../state/redux/state'


const Dialogs = (props) => {
    
    let state = props.store.getState().messagePage;

    console.log(state);
    const dialogElement = state.dialogs.map(user => <DialogItem name={user.name} id={user.id}/>)
    const messageElement = state.messages.map(user => <MessageItem message={user.message} id={user.id}/>)
    let newMessageBody = state.newMssageBody;

    // const newMessage = React.createRef();

    const onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }
    const onNewMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body))
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