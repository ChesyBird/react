import express from 'express';

// App객체 생성
const app = express();

// 기본 라우트 설정
app.get('/', (req, res) => {
    res.send("<h1>Hello, Express!</h1>");
})

app.listen(8000, () => {
    console.log(`서버 실행중...`);
    
})