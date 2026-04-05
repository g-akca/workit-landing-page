import FeaturesItem from "./FeaturesItem";

function FeaturesSection() {
  const features = [
    {
      title: "Actionable insights",
      description: "Optimize your products, improve customer satisfaction and stay ahead of the competition with our product data analytics."
    },
    {
      title: "Data-driven decisions",
      description: "Make data-driven decisions with our product data analytics. Our AI-generated reports help you unlock insights hidden in your product data."
    },
    {
      title: "Always affordable",
      description: "Always affordable pricing that scales with your business. Get top-quality product data analytics services without hidden costs or unexpected fees."
    }
  ]

  return (
    <section className="pt-16 pb-18 tablet:pt-14 tablet:pb-29 desktop:pt-22 desktop:pb-54 px-5 tablet:px-11 desktop:px-20 flex justify-center">
      <div className="flex flex-col desktop:grid desktop:grid-cols-3 gap-8 text-center tablet:text-start desktop:text-center max-w-280">
        {features.map((item, index) => (
          <FeaturesItem 
            key={item.title}
            index={index + 1}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  )
}

export default FeaturesSection;