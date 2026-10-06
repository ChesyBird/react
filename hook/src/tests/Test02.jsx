import { useState } from "react"

const Test02 = () => {

    const [count, setCount] = useState(0);

    const good = () => {
        setCount(count + 1);
    }

    return (
        <div>
            <h2>Test02</h2>
            <h3>💕 {count}</h3>
            <p>
                <button onClick={good}>좋아요</button>
            </p>
        </div>
    )

}

export default Test02;