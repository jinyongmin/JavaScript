// 1. 함수의 기본
function sum(num1, num2) {
  console.log("sum() 호출!");
  return num1 + num2;
}

const result = sum(10, 3); // sum(10, 3)에 리턴값 num1 + num2이 저장되있음 const result =sum(num1, num2)-->num1+num2
console.log(result);

// 2. 함수 메모리
const add = sum;
console.log(sum(10, 3));
console.log(add(10, 3));

// 3. 함수 작성법(팁!)
//조건이 맞지 않는 경우 함수 도입부분에서 함수를 미리 종료!
function print(num) {
  if (num < 0) {
    return;
  }
  console.log(num);
}
print(10);
print(-1);
//return(함수의 종료) 값을 전달하고 난뒤 종료 아래로 내려가지 않음 -->리턴값을 전달받을시 undefined
//else 쓸필요 없음 if문으로 거르고 난뒤에 진행.

// 4. 매개변수의 기본값은 undefined
function total(num1 = 0, num2 = 0) {
  console.log(num1);
  console.log(num2);
  console.log("arguments: ", arguments); // ??? arguments 리스트느낌
  console.log("arguments[1]: ", arguments[1]);
  return num1 + num2;
}

console.log(total()); //???? 값이 나오지 않는다
console.log(total(10, 3)); //13
//total에 10,3 값을 전달

// 5.콜백 함수✅
//함수 계산식을 ->변수로 받아서 변수를 매개변수로 사용!
const calc_add = (a, b) => a + b; //한줄짜리 자동 리턴
const calc_multiply = (a, b) => a * b;
console.log(calc_add(10, 5));
console.log(calc_multiply(10, 5));

function calculator(num1, num2, action) {
  //action 이름
  if (num1 < 0 || num2 < 0) {
    return;
  }
  const result = action(num1, num2);
  console.log(result);
  return result;
}

calculator(4, 2, calc_add); //함수자체를 전달! calc_add---->action calc_add 에 주소 있음
calculator(4, 2, calc_multiply); //calculator

console.log("------------------------");
function iterate(num, action) {
  action(num);
}

function log(num) {
  for (let i = 0; i < num; i++) {
    console.log(i);
  }
}
function square(num) {
  console.log(num ** 2);
}

iterate(3, log);
iterate(3, square);

// 6. 원시값(단일값)과 객체값(집합처럼 묶인)의 비교
// 원시값: 값에 의한 복사 call by value
// 객체값: 참조에 의한 복사(메모리주소) call by reference
function display(num) {
  num = 10;
  console.log(num);
}

const value = 5;
display(value); //5가 복사되어 display(num)으로 들어감
console.log(value);

function displayObj(obj) {
  obh.age = 12; // X!!
  console.log(obj);
}
const dog = { name: "루시", age: 13 };
//  ' ' 키값
displayObj(dog);
console.log(dog);

// obj 복사
function changeAge(obj) {
  return { ...obj, age: 12 }; /// ...: object 생성, 값 바꿈?
}

dog2 = changeAge(dog);
console.log(dog2);
