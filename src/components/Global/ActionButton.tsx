type ActionButtonProps = {
    paddingX: number
    paddingY: number
    variant: 'primary' | 'secundary'
    text: string
}

export default function ActionButton({paddingX, paddingY, variant, text} : ActionButtonProps){

    const variantClasses = variant === 'primary' ? 'bg-strongblue border-none text-light-white ' : 'border border-black text-black'

    return(
        <div>
            <button 
            style={{
                paddingLeft:paddingX,
                paddingRight:paddingX,
                paddingTop:paddingY,
                paddingBottom:paddingY
            }}
            className={`${variantClasses} flex items-center justify-center cursor-pointer`}>
            {text}
            </button>
        </div>
    )
}