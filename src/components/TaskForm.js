import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createTask } from '../features/tasks/taskSlice';
import { useNavigate } from 'react-router-dom';

const TaskForm = () => {
    const dispatch = useDispatch();
    const [text, setText] = useState('');
    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(createTask({ text }));
        setText('');
        navigate('/alltasks');
    };

    return (
        <section className="form">
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="text" style={{ fontWeight: 'bolder' }}>Enter Task</label>
                    <input
                        type="text"
                        id="text"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-block">Add Task</button>
            </form>
        </section>
    );
};

export default TaskForm;
