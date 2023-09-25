// react
import { useState } from 'react'
// context
import { TodoContext } from './todoContext'

export const TodoProvider = ({ children }) => {
	const [todos, setTodos] = useState([])

	const addTodo = (todo) => {
		const newTodos = [...todos, todo]
		setTodos(newTodos)
	}

	const deleteTodo = (id) => {
		const filteredTodos = todos.filter((todo) => todo.id !== id)
		setTodos(filteredTodos)
	}

	const updateTodo = (updatedTodo) => {
		const updatedTodos = todos.map((todo) =>
			todo.id === updatedTodo.id ? { ...updatedTodo } : todo
		)
		setTodos(updatedTodos)
	}

	return (
		<TodoContext.Provider value={{ todos, addTodo, deleteTodo, updateTodo }}>
			{children}
		</TodoContext.Provider>
	)
}
