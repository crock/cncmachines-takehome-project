import React, { useState } from 'react';
import './App.scss';
import ActiveList from './components/ActiveTodos';
import CompletedList from './components/CompletedTodos';
import { DragDropContext } from 'react-beautiful-dnd';

export const themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee',
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222',
  },
};

const App  = () =>  {

  const [todos, setTodos] = useState([])
  const [completed, setCompleted] = useState([])

  const onDragEnd = (result) => {
    if (result.destination == null) return

    console.log(result)
    if (result.source.droppableId !== result.destination.droppableId) {
      switch (result.destination.droppableId) {
        case "completed":
          console.log("dropped on completed")
          let t1 = todos.splice(result.source.index, 1)
          completed.splice(result.destination.index, 0, t1)
          break
        case "active":
          console.log("dropped on active")
          let t2 = completed.splice(result.source.index, 1)
          todos.splice(result.destination.index, 0, t2)
          break
      }
    }
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="App">
        <ActiveList 
          saveTodo={todoText => {
            const trimmedText = todoText.trim();
            if (trimmedText.length > 0) {
              setTodos([...todos, trimmedText]);
            }
          }} 
          todos={todos} 
        />
        <CompletedList
          completed={completed}
        />
      </div>
    </DragDropContext>
  );
}

export default App;
