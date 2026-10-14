import axios from "axios";
import { useState } from "react";

// 서버와 통신 - 데이터 생성 : axios.post()
const AxiosNewTodo = () => {
    // 할 일 중 제목만 추가해봅시다
    const [title, setTitle] = useState("");

    // 입력값 변경
    const handleInputChange = (e) => {
        setTitle(e.target.value);
    }

    // 폼 제출시 처리함수
    const handleSubmit = (e) => {
        e.preventDefault();

        // 입력값 검증
        if(!title.trim()){
            alert("할 일을 입력하세요.");
            return;
        }
       
        // jsonPlaceholder API에 데이터 보내기
        // axios.post(param1, param2)
        // param1 : URL경로, param2 : 서버로 보낼 데이터 객체
        axios.post("https://jsonplaceholder.typicode.com/todos", {
            title: title,
            complited: false
        })
        .then(response => {
            // response.data가 서버 API에 저장
            console.log("추가된 데이터 : ", response.data);

            alert("할 일 추가 완료");
            setTitle(""); // 입력된 데이터 초기화
        })
        .catch(err => console.error(err)
        );
    }

    return (
        <div>
            <h2>Add Todo</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    placeholder="할 일 입력"
                    value={title}
                    onChange={handleInputChange}
                />
                <button type="submit">추가</button>
            </form>
        </div>
    )
}

export default AxiosNewTodo;