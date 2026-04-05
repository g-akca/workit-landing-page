import lightLogo from "/images/logo-light.svg";

function Header() {
  return (
    <header className="bg-purple-900 pt-8 px-5 flex justify-between">
      <img src={lightLogo} alt="Workit logo" />

      <button type="button" className="border-b-3 border-b-green text-white text-[18px] leading-base font-bold">
        Apply for access
      </button>
    </header>
  )
}

export default Header;