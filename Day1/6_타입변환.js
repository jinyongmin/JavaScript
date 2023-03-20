//자동 형변환
const a = 10 + '문자열';        //10문자열
console.log(a);
const b = '3'*'5';          //15
console.log(b);
const c = 1-'문자열';
console.log(c);             //1-문자열

//타입변환 함수
const num1 = '10';
const num2 ='5';
console.log(`현재 num1의 타입: ${typeof(num1)}`);       //현재 num1의 타입: String('' 안에 있기 때문!)
console.log(`num1+num2 = ${num1 + num2}`);              //num1+num2 = 15
console.log(`Number(num1) + Number(num2) = ${Number(num1)+Number(num2)}`);          //Number(num1)) Number란? 문자를 숫자로 변환
console.log()
console.log(`parseInt(num1) + parseInt(num2) = ${parseInt(num1)+parseInt(num2)}`);  //parseint 문자형을 숫자형으로 변환
//Number와 parsrint의 차이 (숫자+문자)--> Number() 함수는 NaN을 리턴합니다.
// 하지만 parseInt는 숫자로 시작해서 숫자가 끝날 때 까지만 형변환을 해서 리턴해줍니다.  ex)'123가나다' -->123
console.log(`Boolean(num1): ${Boolean(num1)}`); //Boolean 값이 있으니까 true!
console.log(`Object(num1): ${Object(num1)}`);