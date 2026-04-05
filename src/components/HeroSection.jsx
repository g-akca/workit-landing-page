import heroImg from "/images/image-hero.webp";
import pattern1 from "/images/bg-pattern-1.svg";
import pattern2 from "/images/bg-pattern-2.svg";

import Button from "./Button";

function HeroSection() {
  return (
    <section className="relative bg-purple-900 rounded-b-[100%_50px] tablet:rounded-b-[100%_85px] desktop:rounded-b-[100%_120px] pt-14 px-5 tablet:px-11 desktop:px-20 pb-42 tablet:pb-50 desktop:pb-92 mb-20 tablet:mb-33.5 desktop:mb-40.5 text-center flex flex-col gap-10 items-center">
      <h1 className="text-white font-fraunces text-[48px] tablet:text-[60px] desktop:text-[80px] leading-[100%]">
        Data <span className="underline decoration-3 decoration-green underline-offset-6 tablet:underline-offset-7 desktop:underline-offset-10">tailored</span> to<br/>your needs.
      </h1>

      <Button>
        Learn more
      </Button>

      <img src={pattern1} alt="Background pattern" className="hidden tablet:block absolute -left-56 desktop:-left-25.5 top-0 desktop:top-8" />
      <img src={pattern2} alt="Background pattern" className="hidden tablet:block absolute -right-23 desktop:-right-12 bottom-22 desktop:bottom-64" />

      <img src={heroImg} alt="Hero image" className="w-80 tablet:w-128.5 desktop:w-191.75 absolute -bottom-20 tablet:-bottom-34 desktop:-bottom-40" />
    </section>
  )
}

export default HeroSection;