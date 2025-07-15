type HomeBannerProps = {
    image: string
}
export default function HomeBanner({image} : HomeBannerProps) {
  return (
   <img src={image} alt="" className="w-full h-[250px] md:h-[402px]" />
  )
}
