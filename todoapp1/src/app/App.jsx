// providers
import { TodoProvider } from '@/app/providers/context/Todo/TodoProvider'
// widgets
import { Todo } from '@/widgets/Todo'

const App = () => {
	return (
		<div
			style={{
				minHeight: '100vh',
				width: '100%',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<TodoProvider>
				<Todo />
			</TodoProvider>
		</div>
	)
}

export default App
