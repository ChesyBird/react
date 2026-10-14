import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const FetchOneById = () => {
    // URL에서 id를 가져옴
    const {id} = useParams();

    // 데이터 1건 상태관리
    const [ data, setData ] = useState(null); // 객체 초기화는 null

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then(response => response.json())
            .then(result => { //result : 자바스크립트 객체
                setData(result);
                console.log(result); //1건
            })
            .catch((error) => console.error(error)
            );
    }, [id])

    return (
        <div>
            <h2>Todo Data</h2>
            {/* data가 true일 때만 표시(조건부렌더링) */}
            {data && (
                <div>
                    <p>id : {data.id}</p>
                    <p>Title : {data.title}</p>
                    <p>Status : {data.completed ? "완료" : "미완료"}</p>
                </div>
            )}
        </div>
    )
}

export default FetchOneById;