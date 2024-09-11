import { useState } from 'react'
import './styles.css'
export function Button ({text}) {
    const [count,setCount] = useState(0)

    function handleClick () {
        console.log("Click")
        setCount((prevState) => count + 1)
    }


    return <button onClick={handleClick} className='submit'>{text} {count} </button>
}