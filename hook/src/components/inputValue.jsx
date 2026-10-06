import { useState } from "react";

const inputValue = () => {
    // 빈 문자열 초기화
    const [ text, setText ] = useState("");

    // 입력값 변경 함수
    const handleInputChange = (event) => {
        setText(event.target.value);
        // console.log(event.target.value);
        
        
    }

    return (
        <div>
            <h2>입력값 변경</h2>
            <div>
                <input
                    type="text"
                    placeholder="글자를 입력하세요"
                    onChange={handleInputChange}
                />
                <p>입력값 : {text}</p>
            </div>
        </div>
    )
}

export default inputValue;