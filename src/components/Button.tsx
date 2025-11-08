interface ButtonProps {
  additionals?: string;
  clickHandler: () => void;
  label: string;
}

const Button = (props: ButtonProps) => {
  return (
    <button 
        className={`hover:bg-white hover:text-green-950 hover:border-none transition-all duration-500 hover:scale-125 border mt-20 w-54 p-6 h-fit rounded-lg ${props.additionals}`} 
        onClick={props.clickHandler}>
            {props.label}
    </button>
  )
}

export default Button
