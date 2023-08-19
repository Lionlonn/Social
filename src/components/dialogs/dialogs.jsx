import React from "react"
import './dialogs.scss'
import  DialogItem  from './Dialogitem/dialogItem.jsx'
import  MessageItem  from './MessageItem/messageItem.jsx'


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
        const state = this.props.messagePage
        const dialogElement = state.dialogs.map(user => <DialogItem name={user.name} id={user.id}/>)
        const messageElement = state.messages.map(user => <MessageItem message={user.message} id={user.id}/>)
        let newMessageBody = state.newMssageBody;

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