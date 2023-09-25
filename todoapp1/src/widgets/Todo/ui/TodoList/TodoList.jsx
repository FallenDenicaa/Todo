// hooks
import { useTodoContext } from '@/shared/hooks/useTodoContext'
// ui
import { TodoTask } from '../TodoTask/TodoTask'

export const TodoList = () => {
	const { todos } = useTodoContext()

	return (
		<div>
			{todos.map((todo) => (
				<TodoTask key={todo.id} id={todo.id} text={todo.text} />
			))}
		</div>
	)
}
