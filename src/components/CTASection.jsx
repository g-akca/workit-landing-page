import Button from "./Button";

import founderImg from "/images/image-founder.webp";
import pattern3 from "/images/bg-pattern-3.svg";

function CTASection() {
  return (
    <section className="pt-16 tablet:pt-0 px-5 tablet:px-11 flex flex-col">
      <img src={founderImg} alt="Founder image" className="w-70 self-center tablet:self-start translate-y-12 tablet:translate-y-28" />

      <div className="relative bg-purple-900 text-white p-8 tablet:p-12 z-10 flex flex-col gap-8 items-center tablet:items-start text-center tablet:text-start tablet:ml-44">
        <h2 className="font-fraunces text-[32px] tablet:text-[48px] leading-[120%]">Be the first to test</h2>

        <p>
          Hi, I'm Louis Graham, the founder of the company. Book a demo call with me to become a beta tester for our app and kickstart your company. Apply for access below and I’ll be in touch to schedule a call.
        </p>

        <Button>
          Apply for access
        </Button>

        <img src={pattern3} alt="Background pattern" className="absolute -bottom-28.5 right-3.5" />
      </div>
    </section>
  )
}

export default CTASection;