import { 
    ADD_TODO, 
    REMOVE_TODO, 
    UPDATE_TODO_CHECKED, 
    EDIT_TODO, 
    UPDATE_TEXT_TODO,
    CANCEL_TEXT_TODO,
    FILTER_DATA_TODO } from "../actions/todoListAction"


export const todoListReducer = (state=initialTodoLIst, action) => {
    switch(action.type) {  
        case ADD_TODO :
            return  {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        id: Math.random(),
                        name: action.payload.text,
                        oldName: action.payload.text,
                        data: action.payload.data,
                        isChecked: false,
                        isEditing: false, 
                    }
                ]
            }
        case REMOVE_TODO :
            const removeFilterTodo = state.filterTodos.filter(todo => todo.id !== action.payload.id)
            const removeTodo = state.todos.filter(todo => todo.id !== action.payload.id)
            return {todos: removeTodo,filterTodos: removeFilterTodo }

        case UPDATE_TODO_CHECKED :
            const updateTodoChecked = state.filterTodos.map(todo => todo.id === action.payload.id ? {...todo, isChecked: action.payload.isChecked} : todo)
            return {...state,filterTodos: updateTodoChecked }

        case EDIT_TODO :
            const editTodo = state.filterTodos.map(todo => todo.id === action.payload.id ? {...todo,oldName: action.payload.oldName, isEditing: !todo.isEditing} : todo)
            return {...state,filterTodos: editTodo }

        case UPDATE_TEXT_TODO :
            const updateTextTodo = state.filterTodos.map(todo => todo.id === action.payload.id ? {...todo, name: action.payload.text} : todo)
            return {...state,filterTodos: updateTextTodo }

        case CANCEL_TEXT_TODO :
            const cancelTextTodo = state.filterTodos.map(todo => todo.id === action.payload.id ? {...todo, name: todo.oldName, isEditing: !todo.isEditing } : todo)
            return {...state,filterTodos: cancelTextTodo }

        case FILTER_DATA_TODO :
            const filterDataTodo = state.todos.filter(todo => todo.data === action.payload.data)
            return {...state, filterTodos: filterDataTodo}

        default : 
            return state
    }
}




export const selectTodos = (state) => {
    return state.todoList
}


export const initialTodoLIst = {
    todos: [
        {
            id: Math.random(),
            name: 111,
            oldName: 111,
            data: '2020-01-02',
            isChecked: false,
            isEditing: false,
        },
        {
            id: Math.random(),
            name: 222,
            oldName: 222,
            data: '2020-05-02',
            isChecked: false,
            isEditing: false,
        },
        {
            id: Math.random(),
            name: 333,
            oldName: 333,
            data: '2020-02-02',
            isChecked: false,
            isEditing: false,
        }
    ],
    filterTodos: [{        id: Math.random(),
        name: 333,
        oldName: 333,
        data: '2020-02-02',
        isChecked: false,
        isEditing: false,
    }]
}
