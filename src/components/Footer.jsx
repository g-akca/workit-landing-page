import darkLogo from "/images/logo-dark.svg";
import facebookIcon from "/images/icon-facebook.svg";
import instagramIcon from "/images/icon-instagram.svg";
import twitterIcon from "/images/icon-twitter.svg";

function Footer() {
  return (
    <footer className="p-20 desktop:p-28 flex flex-col items-center gap-14">
      <img src={darkLogo} alt="Logo image" />

      <div className="flex justify-center gap-7">
        <img src={facebookIcon} alt="Facebook icon" className="cursor-pointer" />
        <img src={twitterIcon} alt="Twitter icon" className="cursor-pointer" />
        <img src={instagramIcon} alt="Instagram icon" className="cursor-pointer" />
      </div>
    </footer>
  )
}

export default Footer;