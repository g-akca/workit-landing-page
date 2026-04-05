function Button({ children }) {
  return (
    <button type="button" className="bg-green text-purple-900 border-2 px-8 py-3 font-bold tablet:text-[18px] tablet:leading-auto transition-colors cursor-pointer hover:bg-transparent hover:text-green hover:border-green">
      {children}
    </button>
  )
}

export default Button;