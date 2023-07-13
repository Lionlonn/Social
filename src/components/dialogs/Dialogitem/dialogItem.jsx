import React from "react"
import '../dialogs.scss'
import { Link, useParams } from "react-router-dom"

const DialogItem = (props) => {
    return (
        <div className="dialog">
            <img src="https://slovnet.ru/wp-content/uploads/2019/01/52-1.png" alt="" />
            <Link to={'/dialogs/' + props.id}>{props.name}</Link>
        </div>
    )
}

export default DialogItem