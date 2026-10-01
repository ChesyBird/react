// 배열 구조 분해 할당
const arr = [1, 2];
console.log(arr[0]);
console.log(arr[1]);

const [x, y] = arr;
console.log(`x = ${x}`);
console.log(`x = ${y}`);

// 객체 구조 분해 할당
const product = {
    pname: "무선키보드",
    price: 30000
}

console.log(product.pname);
console.log(product.price);

const {pname, price} = product;
console.log(`제품명 : ${pname}`);
console.log(`가격 : ${price}`);
