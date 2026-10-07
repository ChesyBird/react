import { useEffect, useState } from "react";

const Clock = () => {
    // 시간상태 관리
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    // 시간을 흐르게 만들기 : 1초씩 증가하는 시간
    useEffect(() => {
        
        setInterval(()=>{
            setTime(new Date().toLocaleTimeString());
        }, 1000);  // 1s = 1000ms
    
        console.log("렌더링...");
    }, []); // [] : 의존성 관리(단 한번만 실행됨)
    

    return (
        <div>
            <h2>디지털시계 만들기</h2>
            <h3>현재 시간 : {time}</h3>
        </div>
    )
}

export default Clock;