function Button({ children }) {
  return (
    <button type="button" className="bg-green text-purple-900 px-8 py-3 font-bold">
      {children}
    </button>
  )
}

export default Button;