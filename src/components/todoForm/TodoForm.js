import { useDispatch, useSelector } from 'react-redux';
import { updateTodoFormData, updateTodoFormText } from '../../redux/actions/todoFormAction';
import { addTodo } from '../../redux/actions/todoListAction';
import { selectFormTodo } from '../../redux/reducers/todoFormReducer';
import styles from './todoForm.module.scss';

const TodoForm = () => {

    const dispatch = useDispatch()
    const value = useSelector(selectFormTodo)

    return (
        <form className={styles.todoForm} onClick={(e) => {
            e.preventDefault()
            dispatch(updateTodoFormText(''))
        }}>
            <input type='text' value={value.text} placeholder='Type here' onChange={(e) => {
                dispatch(updateTodoFormText(e.target.value))
            }} />
            <input type='date' value={value.data} onChange={(e) => {
                dispatch(updateTodoFormData(e.target.value))
            }} />
            <button onClick={() => {
                dispatch(addTodo(value.text, value.data))
            }}>Add</button>
        </form>
    )
}

export default TodoForm;