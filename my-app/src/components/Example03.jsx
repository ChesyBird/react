
const Example03 = () => {
    //클릭 이벤트 함수
    const handleClick = () => {
        alert("버튼이 클릭되었습니다.");
    }

    // 입력값 변경 핸들러(함수)
    const handleInputChange = (event) => {
        // console.log(event); //이벤트 객체 출력
        console.log(event.target.value);
        
        
    }

    return(
        <div>
            <h2>이벤트 핸들러 함수</h2>
            {/* 함수를 호출할 때 소괄호를 생략하지 않으면 바로 작동됨 */}
            <button onClick={handleClick}>클릭하세요</button>
            <p>
                <input
                    type="text"
                    placeholder="글자를 입력하세요"
                    onChange={handleInputChange}
                />
            </p>
        </div>
    )
}

export default Example03;