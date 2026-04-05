import lightLogo from "/images/logo-light.svg";

function Header() {
  return (
    <header className="bg-purple-900 pt-8 desktop:pt-14 px-5 tablet:px-11 desktop:px-20 flex justify-center">
      <nav className="w-full max-w-280 flex justify-between items-center">
        <img src={lightLogo} alt="Workit logo" className="h-6" />

        <button type="button" className="border-b-3 border-b-green text-white text-[18px] leading-base font-bold">
          Apply for access
        </button>
      </nav>
    </header>
  )
}

export default Header;