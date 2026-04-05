function Button({ children }) {
  return (
    <button type="button" className="bg-green px-8 py-3 font-bold">
      {children}
    </button>
  )
}

export default Button;