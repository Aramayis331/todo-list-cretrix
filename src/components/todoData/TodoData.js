import { useSelector } from 'react-redux';
import { selectTodos } from '../../redux/reducers/todoListReducer';
import styles from './todoData.module.scss';
import DataItem from './dataItem/DataItem';

const TodoData = () => {
    
    const todoList = useSelector(selectTodos)
  
    return (
        <div className={styles.todoData}>
            <p>Dates</p>
            { todoList.todos.map(todo => <DataItem key={todo.id} todo={todo} />) }
        </div>
    )
}

export default TodoData;