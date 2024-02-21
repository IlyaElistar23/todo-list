import TodoItem from "./TodoItem";
import { List } from 'antd'
import { useState } from "react";
import ChangeTodo from "./ChangeTodo";

const TodoList = ({todos}) => {
    return (
        <List>
            {todos.map(todo => todo.visible ? <TodoItem key={todo.id} {...todo}/> : <ChangeTodo/>)}
        </List>
    )
}

export default TodoList;