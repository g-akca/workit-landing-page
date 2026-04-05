import heroImg from "/images/image-hero.webp";

import Button from "./Button";

function HeroSection() {
  return (
    <section className="relative bg-purple-900 rounded-b-[100%_50px] pt-14 px-5 pb-42 mb-20 text-center flex flex-col gap-10 items-center">
      <h1 className="text-white font-fraunces font-semibold text-[48px] leading-[100%]">
        Data <span className="underline decoration-3 decoration-green underline-offset-6">tailored</span> to<br/>your needs.
      </h1>

      <Button>
        Learn more
      </Button>

      <img src={heroImg} alt="Hero image" className="w-80 h-46 absolute -bottom-20" />
    </section>
  )
}

export default HeroSection;