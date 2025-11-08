import { useState } from "react"
import Button from "./Button";

const Counter = () => {

    const [count, setCount] = useState(0);

    function toZero(): void {
        const diminish: number = setInterval(() => {
            setCount(prevCount => {
                if(prevCount === 0) {
                    clearInterval(diminish)
                    return 0;
                } return prevCount - 1;
            })
        }, 100)
    }

  return (
    <div className="grid justify-center pt-20 text-center text-white bg-green-950 h-screen">
        <p className="text-5xl font-extrabold pt-40">You clicked {count} times.</p>
        <div className="flex justify-center -mt-60 gap-20 text-4xl font-extrabold">
            <Button label="Click Me" clickHandler={() => setCount(prev => prev + 1)} />
            <Button label="Reset" clickHandler={toZero} />
        </div>
    </div>
  )
}

export default Counter
