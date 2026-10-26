import { useReducer } from "react";

// reducer함수 정의
const reducer = (state, action) => {
    console.log(state, action);
    // action의 타입에 따라 상태를 업데이트 하는 로직
    switch(action.type){
        case "INCREMENT":
            return {count: state.count + 1}
        case "DECREMENT":
            return {count: state.count - 1}
        case "RESET":
            return {count: 0}
        default:
            return state;
    }
}

const CountReducer = () => {
    // useReducer(useReducer함수, 초기화)
    const [state, dispatch] = useReducer(reducer, {count: 0});

    return (

        <div>
            <h2>useReducer() 예제</h2>
            <h3>State : {state.count}</h3>
            <button onClick={()=>
                dispatch({type: "INCREMENT"})
            }>증가</button>
            <button onClick={() =>
                dispatch({type: "DECREMENT"})
            }>감소</button>
            <button onClick={() =>
                dispatch({type: "RESET"})
            }>초기화</button>
        </div>
    )
}

export default CountReducer;