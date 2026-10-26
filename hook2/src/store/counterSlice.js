import { createSlice } from '@reduxjs/toolkit';

const initialState = { count: 0 }

// 액션과 리듀서 생성
const counterSlice = createSlice({
    // 필수 속성: name, initialState, reducers
    name: 'counter',
    initialState,
    reducers: {
        increament: (state) => { state.count = state.count + 1 },
        decreament: (state) => { state.count = state.count - 1 },
        reset: (state) => { state.count = 0 },
        // 입력값만큼 증가
        increamentByAmt: (state, action) => {
            // state.count = state.count + action.payload
            state.count += action.payload;
        }
    }
});

// action과 reducer 내보내기
export const {
            increament, decreament, reset, increamentByAmt
            } = counterSlice.actions;
export default counterSlice.reducer;