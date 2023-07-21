const UPDATE_MESSAGE_BODY = "UPDATE-MESSAGE-TEXT"
const SEND_MESSAGE = "SENT-MESSAGE"



const messageReducer = (state, action) => {

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