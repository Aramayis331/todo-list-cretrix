import styles from './dataItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { filterDataTodo } from '../../../redux/actions/todoListAction';
import { selectTodos } from '../../../redux/reducers/todoListReducer';
import { useEffect } from 'react';

const DataItem = ({ todo }) => {

    const dispatch = useDispatch();
    const todoList = useSelector(selectTodos)

    useEffect(() => {
        dispatch(filterDataTodo(todo.data))
    }, [])

    return (
        <div className={styles.dataItem}>
            <p>{todo.data}  ({todoList.filterTodos.length})</p>
            <NavLink to='data/lists' onClick={() => {
                dispatch(filterDataTodo(todo.data))
            }}>
                <FontAwesomeIcon icon={faAngleRight} />
            </NavLink>
        </div>
    )
}

export default DataItem;