const UPDATE_MESSAGE_BODY = "UPDATE-MESSAGE-TEXT"
const SEND_MESSAGE = "SENT-MESSAGE"

let initialState = {
    dialogs: [
        {id: 4, name: "Andrey"},
        {id: 6, name: "Andrey"},
        {id: 4, name: "Andrey"},
        {id: 7, name: "Andrey"},
    ],
    messages: [
        {id:13, message: "hu"},
        {id:23, message: "hdsdsu"},
        {id:5, message: "aaahu"},
        {id:6, message: "hdu"},
    ],
    newMssageBody: ""
}

const messageReducer = (state = initialState, action) => {

    switch(action.type) {
        case UPDATE_MESSAGE_BODY: 
            state.newMssageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMssageBody
            state.newMssageBody = '';
            state.messages.push({id:25, message: body})
            return state;
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_MESSAGE_BODY, body: body})


export default messageReducer