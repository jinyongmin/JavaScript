const num = 10;    //number 원시 타입
console.log(typeof(num));  
console.log(num);       //10
console.log(num.toString());       //num. -->이때 래퍼객체로감싸짐=object 
console.log(num);                   //number 원시 타입

// 지수 표기법  (해결됨 다시 봐야지!)
const num2 =102;
console.log(num2.toExponential());

//반올림하여 문자열로 변환
const num3 =1234.12;
console.log(num3.toFixed());

//로컬형식의 문자형으로 변환
console.log(num3.toLocaleString('ar-EG'));

const num4 = 0.1 + 0.2 - 0.2;
console.log(num4);

// 브라우저 밖(node.js)
//엔진이 서로 다름
console.log(globalThis);        //globalThis node js 기본적으로 쓸수 있는 것을 보여줌
// 브라우저 안(browser)

console.log('--------------------');
const URL ='http://코리아아이티아카데미.com';
const encoded =encodeURI(URL);
console.log(encoded);

const decoded = decodeURI(encoded);
console.log(decoded);

const part = '코리아아이티아카데미.com';
console.log(encodeURIComponent(part));