import React, { useState } from 'react';

const AddTodo = (props) => {
    const [title,setTitle] = useState("");
    const[desc,setDesc] = useState("");

    const submit =(e) => {
        e.preventDefault();
        if(!title || !desc){
            alert("Title and Desc is required for submission to add a new Todo!"); 
        }
       props.addTodo(title, desc);
    }
    return (
        <div className='container my-3'>
            <h4 className='text-center'>Add Todo</h4>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Todo title</label>
                    <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} className="form-control" id="text" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="desc"  className="form-label">Todo Discription</label>
                    <input type="text" value={desc} onChange={(e)=>setDesc(e.target.value)} className="form-control" id="desc" />
                </div>
                <button type="submit" className="btn btn-sm btn-outline-success">Add Todo</button>    
            </form>
        </div>
    );
};

export default AddTodo;