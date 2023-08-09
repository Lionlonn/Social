import React from "react"
import './dialogs.scss'
import { useSelector, useDispatch } from 'react-redux';
import { updateNewMessageBodyCreator, sendMessageCreator} from '../../redux/message-page-reducer'
import Dialogs from "./dialogs.jsx";


const DialogsContainer = (props) => {
    

    const state = useSelector(state => state.messagePage)
    const dispatch = useDispatch();

    const onSendMessageClick = () => {
        dispatch(sendMessageCreator());
    }
    const onNewMessageChange = (body) => {
        dispatch(updateNewMessageBodyCreator(body))
       
    }
    
    return (
        < Dialogs UpdateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick} messagePage={state}/>
    )
}


export default DialogsContainer