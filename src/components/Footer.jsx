import darkLogo from "/images/logo-dark.svg";

import FacebookIcon from "./icons/FacebookIcon";
import TwitterIcon from "./icons/TwitterIcon";
import InstagramIcon from "./icons/InstagramIcon";

function Footer() {
  return (
    <footer className="p-20 desktop:p-28 flex flex-col items-center gap-14">
      <img src={darkLogo} alt="Logo image" />

      <div className="flex justify-center items-center gap-7">
        <FacebookIcon />
        <TwitterIcon />
        <InstagramIcon />
      </div>
    </footer>
  )
}

export default Footer;