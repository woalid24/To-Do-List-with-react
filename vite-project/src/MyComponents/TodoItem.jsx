import React, { useState } from 'react';

const TodoItem = ({todo,onDelete}) => {
    const [isDone, setIsDone] = useState(false);

  const handleDoneClick = () => {
    setIsDone(!isDone);
  };
  
    return ( 
        <div>
            <h4>{todo.title}</h4>
            <p>{todo.desc}</p>
            <button className='btn btn-sm btn-danger' onClick={()=>{onDelete(todo)}}>Delete</button>
            <button className='btn btn-sm btn-primary mx-2' onClick={handleDoneClick}>
        {isDone ? 'Todo Done' : 'Todo Undone'}
      </button>
        </div>
    );
};

export default TodoItem;