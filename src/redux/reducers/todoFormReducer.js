import { UPDATE_TODO_FORM_TEXT, UPDATE_TODO_FORM_DATA } from "../actions/todoFormAction"

export const todoFormReducer = (state=initialTodoForm, action) => {
    switch(action.type) {
        case UPDATE_TODO_FORM_TEXT :
            return {...state, text: action.payload.text}
        case UPDATE_TODO_FORM_DATA :
            return {...state, data: action.payload.data}


        default :
            return state
    }
}


export const selectFormTodo = (state) => {
    return state.todoForm
}

export const initialTodoForm = {
    text: '',
    data: '',
}