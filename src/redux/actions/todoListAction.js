export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const UPDATE_TODO_CHECKED = 'UPDATE_TODO_CHECKED';
export const EDIT_TODO = 'EDIT_TODO';
export const UPDATE_TEXT_TODO = 'UPDATE_TEXT_EDIT';
export const CANCEL_TEXT_TODO = 'CANCEL_TEXT_TODO';
export const FILTER_DATA_TODO = 'FILTER_DATA_TODO';

export const addTodo = (newText, newData) => {
    return {
        type: ADD_TODO,
        payload: {
            text: newText,
            data: newData,
        }
    }
}

export const removeTodo = (newId) => {
    return {
        type: REMOVE_TODO,
        payload: {
            id: newId,
        }
    }
}

export const updateTodoChecked = (newId, newChecked) => {
    return {
        type: UPDATE_TODO_CHECKED,
        payload: {
            id: newId,
            isChecked: !newChecked,
        }
    }
}

export const editTodo = (newID, newOldName) => {
    return {
        type: EDIT_TODO,
        payload: {
            id: newID,
            oldName: newOldName,
        }
    }
}

export const updateTextTodo = (newId, newText) => {
    return {
        type: UPDATE_TEXT_TODO,
        payload: {
            id: newId,
            text: newText,
        }
    }
}

export const cancelTextTodo = (newId) => {
    return {
        type: CANCEL_TEXT_TODO,
        payload: {
            id: newId,
        }
    }
}

export const filterDataTodo = (newData) => {
    return {
        type: FILTER_DATA_TODO,
        payload: {
            data: newData
        }
    }
}

