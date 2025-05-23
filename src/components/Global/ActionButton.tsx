type ActionButtonProps = {
    width: string
    height: string
    variant: 'primary' | 'secundary'
    text: string
}

export default function ActionButton({width, height, variant, text} : ActionButtonProps){
    return(
        <div>
            <button className={`w-[${width}px] h-[${height}px] ${variant === 'primary' ? 'bg-strongblue border-none text-light-white ' : 'border border-black text-black'} flex items-center justify-center `}>
            {text}
            </button>
        </div>
    )
}