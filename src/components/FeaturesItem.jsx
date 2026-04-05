function FeaturesItem({ index, title, description }) {
  return (
    <div className="flex flex-col gap-6 items-center tablet:flex-row tablet:gap-14">
      <span className="h-12 aspect-square rounded-full border-purple-500 border font-fraunces text-[20px] flex justify-center items-center">{index}</span>

      <div className="flex flex-col gap-4 tablet:gap-7">
        <h2 className="font-fraunces text-[24px] tablet:text-[28px] leading-[120%]">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default FeaturesItem;