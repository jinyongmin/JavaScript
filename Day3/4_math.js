console.log(Math.min());
console.log(Math.max());
console.log(Math.min(1, 10, -10, 1000, 0));
console.log(Math.min(1, 10, '마이너스십', 1000, 0));    //NaN
console.log(Math.max(1, 10, -10,  '1000', 0));  //1000 자동형변환

console.log(Math.round(10.49));
console.log(Math.round(10.5));
console.log(Math.round(-10.5));
console.log(Math.round(-10.51));
console.log('--------------------');

console.log(Math.floor(10.49));
console.log(Math.floor(10.5));
console.log(Math.floor(-10.5));
console.log(Math.floor(-10.51));
console.log('--------------------');
console.log(Math.ceil(10.49));
console.log(Math.ceil(10.5));
console.log(Math.ceil(-10.5));
console.log(Math.ceil(-10.51));

const rn = Math.random();
console.log(rn);
//1부터 10사이의 값을 뽑아내고싶을 때

const num = Math.floor(Math.random() * 10) + 1
console.log(num);        //소수점 내림