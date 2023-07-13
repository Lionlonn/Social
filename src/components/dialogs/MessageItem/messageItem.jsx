import React from "react"
import '../dialogs.scss'


const MessageItem = (props) => {
    return (
        <div className="message-item">
            <img src="https://slovnet.ru/wp-content/uploads/2019/01/52-1.png" alt="" />
            <div className="message" id={props.id}>{props.message}</div>
        </div>
    )
}


export default MessageItem