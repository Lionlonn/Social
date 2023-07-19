import React from "react"
import './dialogs.scss'
// import { Link, useParams } from "react-router-dom"
import  DialogItem  from './Dialogitem/dialogItem.jsx'
import  MessageItem  from './MessageItem/messageItem.jsx'
import { addMessageActionCreater, updateMessageActionCreator } from '../../state/redux/state'


const Dialogs = (props) => {
    const dialogElement = props.state.dialogs.map(user => <DialogItem name={user.name} id={user.id}/>)
    const messageElement = props.state.dialogs.map(user => <MessageItem message={user.message} id={user.id}/>)

    const newMessage = React.createRef();

    const onMessageClick = () => {
        debugger
        props.dispatch(addMessageActionCreater())
    }
    const onMessageChange = () => {
        let text = newMessage.current.value;
        let action = updateMessageActionCreator(text)
        props.dispatch(action)
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
                        <textarea 
                            onChange = {onMessageChange}
                            ref={ newMessage }
                            value = {props.newMssageText}
                            ></textarea>
                        <button onClick={ onMessageClick }>Отправить</button>
                    </div>
                </div>
            </div> 
        </div>
    )
}


export default Dialogs