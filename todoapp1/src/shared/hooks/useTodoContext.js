import { useContext } from 'react'
import { TodoContext } from '@/app/providers/context/Todo/todoContext'

export const useTodoContext = () => {
	return useContext(TodoContext)
}
