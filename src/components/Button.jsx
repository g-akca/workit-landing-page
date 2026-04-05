function Button({ children }) {
  return (
    <button type="button" className="bg-green text-purple-900 px-8 py-3.5 font-bold tablet:text-[18px] tablet:leading-auto">
      {children}
    </button>
  )
}

export default Button;