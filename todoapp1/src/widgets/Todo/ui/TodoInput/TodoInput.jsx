// react
import { useState } from 'react'
// hooks
import { useTodoContext } from '@/shared/hooks/useTodoContext'
// libs
import { v4 as uuidv4 } from 'uuid'
// ui
import { Input } from '@/shared/ui/Input/Input'
import { Button } from '@/shared/ui/Button/Button'
// styles
import styles from './TodoInput.module.scss'

export const TodoInput = () => {
	const { addTodo } = useTodoContext()

	const [todoValue, setTodoValue] = useState('')

	const onButtonClick = () => {
		addTodo({
			id: uuidv4(),
			text: todoValue,
		})
		setTodoValue('')
	}

	const onTodoChange = (e) => {
		setTodoValue(e.target.value)
	}

	return (
		<div className={styles.todoInput}>
			<Input value={todoValue} onChange={onTodoChange} />
			<Button onClick={onButtonClick} disabled={!todoValue}>
				Create
			</Button>
		</div>
	)
}
