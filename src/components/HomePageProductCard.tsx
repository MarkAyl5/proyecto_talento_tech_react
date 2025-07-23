import ActionButton from "./Global/ActionButton"

type HomePageProductCardProps = {
    name: string
    image:string
    price: number
    onClick?: () => void;
}

export default function HomePageProductCard({name, image, price, onClick} : HomePageProductCardProps) {
  return (
    <div id="rainbow-gradient" className="p-[2px] w-[192px] h-[330px] ">

        <div className="w-full h-full bg-white px-2 py-3 flex flex-col justify-between [&_p]:font-poppins shadow-xl">

                <img src={image} alt="" className="h-36 w-full"/>
                
                <div className="flex flex-col gap-5 h-1/3">
                    <p className="h-1/2">
                        {name}
                    </p>
                    <div className="flex gap-2 [&_p]:text-md h-1/2">
                        <p className="text-price-blue">${price}</p>
                        <p className="opacity-40 line-through">${price + price * 0.1}</p>
                    </div>
                </div>

                <ActionButton
                paddingX={12}
                paddingY={4}
                variant="primary"
                text="Mostrar más"
                onClick={onClick}
                />
        </div>

    </div>
  )
}
