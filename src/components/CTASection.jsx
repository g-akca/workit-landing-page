import Button from "./Button";
import founderImg from "/images/image-founder.webp";

function CTASection() {
  return (
    <section className="pt-16 px-5 flex flex-col">
      <img src={founderImg} alt="Founder image" className="w-70 self-center translate-y-12" />

      <div className="bg-purple-900 text-white p-8 z-10 flex flex-col gap-8 text-center">
        <h2 className="font-fraunces text-[32px] leading-[120%]">Be the first to test</h2>

        <p>
          Hi, I'm Louis Graham, the founder of the company. Book a demo call with me to become a beta tester for our app and kickstart your company. Apply for access below and I’ll be in touch to schedule a call.
        </p>

        <Button>
          Apply for access
        </Button>
      </div>
    </section>
  )
}

export default CTASection;