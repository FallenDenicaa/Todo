export const Button = ({ onClick, children, disabled }) => {
	return (
		<button disabled={disabled} onClick={onClick}>
			{children}
		</button>
	)
}
