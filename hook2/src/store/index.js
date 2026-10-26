import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice"

// store 생성
export const store = configureStore({
    reducer: {
        // counterSlice에서 내보내기 한 reducer 등록
        counter: counterReducer, 
    }
});