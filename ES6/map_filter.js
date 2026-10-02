// map() - 기존 배열의 각 요소에 대해 새로운 배열로 반환
const arr = [1, 2, 3];

// newArr = [2, 4, 6] 만들기
// const newArr = arr.map((x) => {return x * 2});
const newArr = arr.map(x => x * 2);

console.log(newArr);

// 객체가 요소인 배열
const users = [
    {name: "Jerry", age: 25},
    {name: "Linda", age: 30},
    {name: "Tom", age: 35}
];

// 직접 출력해보기
console.log(users[0].name); //기대값: Jerry
console.log(users[1].age); //기대값: 30


// 배열에서 이름들만 출력
const userName = users.map((user) => user.name);
console.log(userName); //['Jerry', 'Linda', 'Tom']

// filter() - 배열의 각 요소 중에서 조건이 참인 요소만 모아 새로운 배열로 반환
const nums = [1, 2, 3, 4, 5];

// 짝수만 출력 (num % 2 == 0)
const evens = nums.filter((num) => num % 2 == 0);
console.log(evens);

// users에서 나이가 30 이상인 회원
const adults = users.filter((user) => user.age >= 30);
console.log(adults); // [{ name: 'Linda', age: 30 }, { name: 'Tom', age: 35 }]

// users에서 나이가 30 이상인 회원의 이름 : filter/map 동시사용
const adultsName = users.filter((user) => user.age >= 30)
                        .map(user => user.name);
console.log(adultsName);

// forEach() 
let userNames = []; // 빈 배열
users.forEach(user => {
    userNames.push(user.name); // 요소를 추가
});
console.log(userNames);

