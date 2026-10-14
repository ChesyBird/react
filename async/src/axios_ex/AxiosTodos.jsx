import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const AxiosTodos = () => {  
    // json Placeholder API에서 데이터 가져오기
    const [ datas, setDatas ] = useState([]);

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/todos")
            .then(response => {
                setDatas(response.data) // json에서 js객체로 변환된 데이터
                console.log(response.data);
            })
            .catch(err => console.log(err)
            );
    }, []);


    return (
        <div>
            <h2>Todo List</h2>
            <ul>
                {datas.map(todo => (
                    <li key={todo.id}>
                        <Link to={`/axios/${todo.id}`}>{todo.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default AxiosTodos;