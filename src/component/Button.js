export default function Button({ onClick, ...props }) {
  return (
    <button onClick={onClick} {...props}>
      {children}
    </button>
  )
}
