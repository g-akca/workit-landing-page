function FeaturesSection() {
  return (
    <section className="py-16 px-5 flex flex-col gap-8 text-center">
      <div className="flex flex-col gap-6 items-center">
        <span className="h-12 aspect-square rounded-full border-purple-500 border font-fraunces text-[20px] flex justify-center items-center">1</span>

        <div className="flex flex-col gap-4">
          <h2 className="font-fraunces text-[24px] leading-[120%]">Actionable insights</h2>
          <p>Optimize your products, improve customer satisfaction and stay ahead of the competition with our product data analytics.</p>
        </div>
      </div>

      <div className="flex flex-col gap-6 items-center">
        <span className="h-12 aspect-square rounded-full border-purple-500 border font-fraunces text-[20px] flex justify-center items-center">2</span>

        <div className="flex flex-col gap-4">
          <h2 className="font-fraunces text-[24px] leading-[120%]">Data-driven decisions</h2>
          <p>Make data-driven decisions with our product data analytics. Our AI-generated reports help you unlock insights hidden in your product data.</p>
        </div>
      </div>

      <div className="flex flex-col gap-6 items-center">
        <span className="h-12 aspect-square rounded-full border-purple-500 border font-fraunces text-[20px] flex justify-center items-center">3</span>

        <div className="flex flex-col gap-4">
          <h2 className="font-fraunces text-[24px] leading-[120%]">Always affordable</h2>
          <p>Always affordable pricing that scales with your business. Get top-quality product data analytics services without hidden costs or unexpected fees.</p>
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection;