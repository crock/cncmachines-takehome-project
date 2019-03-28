import React from 'react'

function todoReducer(state, action) {
    switch (action.type) {
        case 'add-todo': 
            return {
                todos: state.todos.push(action.payload)
            }
        case 'remove-todo':
            let index = state.todos.indexOf(action.payload)
            return {
                todos: state.todos.splice(index, 1, action.payload)
            }
        default:
            throw new Error()
    }
}

export default todoReducer
