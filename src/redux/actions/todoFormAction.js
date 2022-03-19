export const UPDATE_TODO_FORM_TEXT = 'UPDATE_TODO_FORM_TEXT';
export const UPDATE_TODO_FORM_DATA = 'UPDATE_TODO_FORM_DATA';

export const updateTodoFormText = (newText) => {
    return {
        type: UPDATE_TODO_FORM_TEXT,
        payload: {
            text: newText
        }
    }
}

export const updateTodoFormData = (newData) => {
    return {
        type: UPDATE_TODO_FORM_DATA,
        payload: {
            data: newData
        }
    }
}
