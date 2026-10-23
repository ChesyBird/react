import { useRef, useState } from "react";

const UseRefEx = () => {
    
    const [count, setCount] = useState(0);

    console.log("렌더링...");

    // 1증가 시키는 함수(State 상태 증가)
    const increaseCnt = () => {
        setCount(count +1);
    }

    // Ref 사용하기
    // 참조 객체를 생성, 0으로 초기화
    const countRef = useRef(0);

    console.log(countRef);

    // 1증가 시키는 함수(참조 증가)
    const increaseCntRef = () => {
        countRef.current = countRef.current + 1;
        console.log("Ref : ", countRef.current);
    }
    // 참조는 기억을 하고 있다가 다른 기능이 실행되면 적용된다.


    return (
        <div>
            <h2>useRef() 실습</h2>
            <p>State : {count} </p>
            <p>Ref : {countRef.current}</p>
            
            <button onClick={increaseCnt}>State 증가</button>
            <button onClick={increaseCntRef}>Ref 증가</button>
        </div>
    )
}

export default UseRefEx;