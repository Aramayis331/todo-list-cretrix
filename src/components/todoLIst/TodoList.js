import styles from './todoList.module.scss';
import { useSelector } from 'react-redux';
import { selectTodos } from '../../redux/reducers/todoListReducer';
import TodoItem from './todoItem/TodoItem';
import { NavLink } from 'react-router-dom';

const TodoList = () => {

    const todoList = useSelector(selectTodos)

    return (
        <div className={styles.todoList}> 
            <NavLink to='/' >Go back</NavLink>
            { todoList.filterTodos.map(todo => <TodoItem key={todo.id} todo={todo} />) }
        </div>
    )
}

export default TodoList;