import { useState } from "react";

const Counter = () => {

    const [count, setCount] = useState(0);

    const increaseCnt = () => {
        setCount(count + 1);
    }
    const decreaseCnt = () => {
        setCount(count - 1);
    }
    const reset = () => {
        setCount(0);
    }



    return (
        <div>
            <h2>useState()방식</h2>
            <p>상태 : {count} </p>
            <button onClick={increaseCnt}>증가</button>
            <button onClick={decreaseCnt}>감소</button>
            <button onClick={reset}>초기화</button>
        </div>
    )
}

export default Counter;