import HomeBanner from "./HomeBanner";

export default function HeroSection() {
  return (
    <div className="mt-5">
        <HomeBanner
        image={"/HeroSectionImage.png"}
        />
        <div className="flex justify-center items-center gap-3 mt-5">
            <div className="size-4 bg-blue-500 rounded-full"></div>
            <div className="size-4 bg-blue-500 opacity-50 rounded-full"></div>
            <div className="size-4 bg-blue-500 opacity-50 rounded-full"></div>
            <div className="size-4 bg-blue-500 opacity-50 rounded-full"></div>
        </div>
    </div>
  )
}
