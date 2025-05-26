type HomeBannerProps = {
    image: string
}
export default function HomeBanner({image} : HomeBannerProps) {
  return (
   <img src={image} alt="" className="w-full h-[402px]" />
  )
}
