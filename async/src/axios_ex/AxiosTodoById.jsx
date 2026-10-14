import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const AxiosTodoById = () => {

    const {id} = useParams();
    const [ data, setData ] = useState(null);

        useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then(response => {
                setData(response.data) // json에서 js객체로 변환된 데이터
                console.log(response.data);
            })
            .catch(err => console.log(err)
            );
    }, [id]);

    return (
        <div>
            <h2>Todo Detail</h2>
            {data && (
                <div>
                    <p>Title : {data.title}</p>
                    <p>Status : {data.completed ? "완료" : "미완료"}</p>
                </div>
            )}
        </div>
    )
}

export default AxiosTodoById;