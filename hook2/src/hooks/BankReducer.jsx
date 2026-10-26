import { useReducer, useState } from "react";

// export시 default가 없는 경우 : 중괄호로 묶어야함.

const initialState = {balance: 0};

const reducer = (state, action) => {
    console.log(state, action);
    // 예금: DEPOSIT, 출금: WITHDRAW, 금액: AMOUNT(action.payload)
    switch(action.type){
        case "DEPOSIT":
            return {...state, balance: state.balance + action.payload}
        case "WITHDRAW":
            if(action.payload > state.balance){
                alert("잔액이 부족합니다.")
                return state;
            }
            return {...state, balance: state.balance - action.payload}
        default:
            return state;
    }
}

const BankReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [amount, setAmount] = useState(0); // 금액(입출금)

    return (
        <div>
            <h2>예금 및 출금</h2>
            <h3>현재 잔액 : {state.balance} 원</h3>
            <div>
            <input
                type="number"
                value={amount}
                // e.target.value : 문자열 -> 숫자형으로 변환
                onChange={(e)=>setAmount(Number(e.target.value))}
                step={1000}
            /> 원
            </div>
            <button onClick={()=>
                dispatch({type: "DEPOSIT", payload: amount})
            }>예금</button>
            <button onClick={()=>
                dispatch({type: "WITHDRAW", payload: amount})
            }>출금</button>
        </div>
    )
}

export default BankReducer;