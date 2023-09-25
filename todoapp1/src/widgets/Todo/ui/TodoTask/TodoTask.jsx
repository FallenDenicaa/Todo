// react
import { useState } from 'react'
// hooks
import { useTodoContext } from '@/shared/hooks/useTodoContext'
// ui
import { Button } from '@/shared/ui/Button/Button'
import { Input } from '@/shared/ui/Input/Input'
// styles
import styles from './TodoTask.module.scss'

export const TodoTask = ({ id, text }) => {
	const { deleteTodo, updateTodo } = useTodoContext()

	const [todoValue, setTodoValue] = useState(text)

	const [isUpdating, setIsUpdating] = useState(false)

	const onButtonDeleteTodo = () => {
		deleteTodo(id)
	}

	const onButtonUpdateTodo = () => {
		const todo = {
			id: id,
			text: todoValue,
		}
		updateTodo(todo)
		setIsUpdating(false)
	}

	const onIsUpdatingSwitcher = () => {
		setIsUpdating(true)
	}

	const onTodoChange = (e) => {
		setTodoValue(e.target.value)
	}

	return (
		<div className={styles.todo}>
			{!isUpdating ? (
				<div> text : {text}</div>
			) : (
				<div>
					<Input value={todoValue} type="text" onChange={onTodoChange} />
					<Button onClick={onButtonUpdateTodo}>Update</Button>
				</div>
			)}
			<Button onClick={onIsUpdatingSwitcher}>Change</Button>
			<Button onClick={onButtonDeleteTodo}>Delete Todo</Button>
		</div>
	)
}
