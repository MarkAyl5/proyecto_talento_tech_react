
type BenefitProps = { 
    image: string
    title: string
    text:string
}

export default function Benefit({image, title, text} : BenefitProps) {
  return (
    <div>
        <img src={image} alt="" className="ml-2 size-10"/>
        <div className="border-l-price-blue border-l pl-2">
            <p className="font-poppins text-lg">{title}</p>
            <p className="text-md w-[220px]">{text}</p>
        </div>

    </div>
  )
}
