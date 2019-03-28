import React, { Component, useState } from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';

const CompletedList = ({ completed, saveTodo, deleteTodo }) => {

    const initialState = {
        completed: []
    }
    const [value, setValue] = useState('')

    const addItem = () => {

        if(!value) return

        saveTodo(value)
    }

    return (
        <Droppable droppableId="completed">
            {(provided, snapshot) => (
                <div 
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className="todo-list"
                >
                    <h3>Completed</h3>
                    <ul>
                        {completed.map((todo, index) =>
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
                </div>
            )}
        </Droppable>
    )
}

export default CompletedList;