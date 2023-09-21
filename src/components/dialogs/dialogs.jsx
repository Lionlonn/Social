import React from "react"
import './dialogs.scss'
import  DialogItem  from './Dialogitem/dialogItem.jsx'
import  MessageItem  from './MessageItem/messageItem.jsx'
import { Navigate } from "react-router-dom"


class Dialogs extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            newMessageBody: ''
        }
    }

    
    onSendMessageClick = () => {
        this.props.sendMessage()
    }
    onNewMessageChange = (e) => {
        let body = e.target.value;
        this.props.UpdateNewMessageBody(body)
        this.setState( {newMessageBody:body} )
       
    }
    

    render () {
        const state = this.props.messagePage.messages
        const dialogElement = state.dialogs.map(user => <DialogItem name={user.name} id={user.id}/>)
        const messageElement = state.messages.map(user => <MessageItem message={user.message} id={user.id}/>)
        let newMessageBody = state.newMssageBody;

        if (!this.props.messagePage.isAuth) return <Navigate to={"/login"}/>;


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
                                onChange = { this.onNewMessageChange}
                                value = {newMessageBody}
                                ></textarea>
                            <button onClick={ this.onSendMessageClick }>Отправить</button>
                        </div>
                    </div>
                </div> 
            </div>
        )
    }
}




export default Dialogs