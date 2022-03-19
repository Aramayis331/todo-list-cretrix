import { useDispatch } from 'react-redux';
import { cancelTextTodo, editTodo, removeTodo, updateTextTodo, updateTodoChecked } from '../../../redux/actions/todoListAction';
import styles from './todoItem.module.scss';

const TodoItem = ({ todo }) => {

    const dispatch = useDispatch()
    
    return (
        <div className={styles.todoItem}>
                {
                    (!todo.isEditing) && 

                    (
                       <div className={styles.divEditRemove}>
                            <input type='checkbox' checked={todo.isChecked} onChange={() => {
                                dispatch(updateTodoChecked(todo.id, todo.isChecked))
                             }}/>
                            <span>{todo.name}</span>
                           <div>
                            <button className={styles.edit} onClick={() => {
                                    dispatch(editTodo(todo.id, todo.name))
                                }}>Edit</button>
                                <button className={styles.remove} onClick={() => {
                                    dispatch(removeTodo(todo.id))
                                }}>Delete</button>
                           </div>
                       </div>     
                    )
                }
                {
                    (todo.isEditing) && 

                    (
                        <div className={styles.divEditRemove}>
                              <input type='checkbox' checked={todo.isChecked} onChange={() => {
                                dispatch(updateTodoChecked(todo.id, todo.isChecked))
                             }}/>
                             <input value={todo.name} onChange={(e) => {
                                 dispatch(updateTextTodo(todo.id, e.target.value))
                             }}/>
                            <div>
                             <button className={styles.save} onClick={() => {
                                    dispatch(editTodo(todo.id))
                                }}>Save</button>
                             <button className={styles.cancel} onClick={() => {
                                 dispatch(cancelTextTodo(todo.id))
                             }}>Cancel</button>
                            </div>
                        </div>
                    )
                }
        </div>
    )
}

export default TodoItem;