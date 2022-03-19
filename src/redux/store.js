import { createStore, combineReducers } from 'redux'
import { initialTodoForm, todoFormReducer } from './reducers/todoFormReducer';
import { initialTodoLIst, todoListReducer } from './reducers/todoListReducer';

const store = createStore(combineReducers({
    todoList: todoListReducer,
    todoForm: todoFormReducer,
}, {
    todoList: initialTodoLIst,
    todoForm: initialTodoForm,
}))

export default store;