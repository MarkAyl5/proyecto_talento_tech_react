type ActionButtonProps = {
    paddingX: number
    paddingY: number
    variant: 'primary' | 'secundary'
    text: string
    onClick?: () => void;
}

export default function ActionButton({ paddingX, paddingY, variant, text, onClick }: ActionButtonProps) {

    const variantClasses = variant === 'primary' ? 'bg-strongblue border border-white text-light-white ' : 'border border-black text-black'

    return(
        <div>
            <button 
            style={{
                paddingLeft:paddingX,
                paddingRight:paddingX,
                paddingTop:paddingY,
                paddingBottom:paddingY
            }}
            className={`${variantClasses} flex items-center justify-center cursor-pointer`}
            onClick={onClick}
            >
            {text}
            </button>
        </div>
    )
}