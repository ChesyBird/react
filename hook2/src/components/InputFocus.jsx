import { useRef } from "react";

const InputFocus = () => {
    // 객체 초기화는 null
    const inputRef = useRef(null);
    // input 태그에 ref 속성 넣으면
    console.log(inputRef); // {current: input}
    
    const doClick = () => {
        alert(`${inputRef.current.value}님, 환영합니다.`);
        inputRef.current.focus();
        inputRef.current.value = "";
    }

    return (
        <div>
            <h2>DOM 요소에 접근(입력상자)</h2>
            <input
                type="text"
                // 무언가 제어하고있음
                ref={inputRef}
                placeholder="이름을 입력하세요"
            />
            <button onClick={doClick}>가입</button>
        </div>
    )
}

export default InputFocus;