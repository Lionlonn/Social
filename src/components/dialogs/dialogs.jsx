import React from "react"
import './dialogs.scss'
import { Link } from "react-router-dom"

const { data: users } = require('../../data/messages/messages.json')

const DialogItem = (props) => {
    return (
        <div className="dialog">
            <Link to={'/dialogs/' + props.id}>{props.name}</Link>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className="message">{props.message}</div>
    )
}

const Dialogs = (props) => {
    return (
        <div className="chat">
            <div className="dialogs">
                <div className="dialog-item">
                    {users.map(user => (
                        <DialogItem name={user.name} id={user.id}/>
                    ))}
                </div>
                <div className="messages">
                    {users.map(user => (
                        <Message message={user.message}/>
                    ))}
                </div>
            </div> 
        </div>
    )
}


export default Dialogs