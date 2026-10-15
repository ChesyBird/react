import express from 'express';

// App객체 생성
const app = express();
const PORT = 8000; // 포트 설정

// 기본 라우트 설정
app.get('/', (req, res) => {
    res.send("<h1>Hello, Express!</h1>");
})

// 상품 목록 보기
// 상품 데이터 생성 -> front에 보내기(json 데이터)
// app.get(URL경로, 콜백함수)
// http://localhost:8000/api/products
app.get("/api/products", (req, res)=>{
    const products = [
        {id: 1, name: "무선 마우스", price: 30000},
        {id: 2, name: "유선 키보드", price: 20000},
        {id: 3, name: "웹캠", price: 50000}
    ]
    res.json(products); // json 형태로 응답(반환)
});

// 요청 본문(Body)을 Json형태로 파싱하기 위한 미들웨어
app.use(express.json());

// 상품 등록
// app.post(URL경로, 콜백함수)
// Postman(포스트맨) : 데이터 테스트 도구
// Junit: 백엔드에서 확인 / Postman: 웹브라우저에서 확인
// id, name, price 보내기
app.post("/api/products", (req, res)=>{
    console.log(req.body); //{id: 4, name: "모니터", price: 120000}
    res.send("상품이 등록되었습니다.")
});

// 서버 실행
app.listen(PORT, () => {
    console.log(`서버 실행중... http://localhost:${PORT}`);
    
})