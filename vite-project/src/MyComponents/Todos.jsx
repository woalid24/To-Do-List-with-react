import React from 'react';
import TodoItem from './TodoItem';

const Todos = (props) => {
    let myStyle={
        minHeight: "70vh",
        margin : "40px auto"
    }
    return (
        <div className='container'style={myStyle}>
            <h3 className='text-center my-3'>Todo List</h3>
            {props.todos.length ===0?"No Todos To Display":
            props.todos.map((todo)=>(
                <TodoItem todo={todo} onDelete = {props.onDelete} key={todo.sno}/>
            ))}
            
        </div>
    );
};

export default Todos;