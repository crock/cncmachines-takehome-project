import React, { Component, useState, useReducer } from 'react';
import todoReducer from '../reducers/TodoReducer';
import { Draggable, Droppable } from 'react-beautiful-dnd';

const ActiveList = ({ todos, saveTodo, deleteTodo }) => {

    const initialState = {
        todos: [
            'example task 1'
        ]
    }

    const [state, dispatch] = useReducer(todoReducer, initialState)
    const [value, setValue] = useState('')

    const handleInputChange = e => {
        setValue(e.target.value)
    }

    const addItem = () => {

        if(!value) return

        saveTodo(value)

        setValue('')
    }

    return (
        <Droppable droppableId="active">
            {(provided, snapshot) => (
                <div 
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className="todo-list"
                >
                    <h3>Active</h3>
                    <ul>
                        {todos.map((todo, index) =>
                            <Draggable key={index} draggableId={index + 1} index={index}>
                                {(provided, snapshot) => (
                                    <li
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                    >
                                        {todo}
                                    </li>    
                                )}
                            </Draggable>
                        )}
                    </ul>
                    <div className="form-group">
                        <input type="text" 
                            placeholder="Add a todo..."
                            onChange={handleInputChange}
                            value={value} />
                        <button onClick={addItem}>Add</button>
                    </div>
                </div>
            )}
        </Droppable>
    )
}

export default ActiveList;