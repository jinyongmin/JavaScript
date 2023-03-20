const str1 ='안녕하세요. JavaScript!';
console.log(str1);
console.log(str1.length);

console.log(str1.indexOf('J'));
console.log(str1.indexOf('Java'));
console.log(str1.indexOf('java'));      //-1
console.log(str1.indexOf('a'));         //8
console.log(str1.lastIndexOf('a'));     //10

console.log(str1.charAt(7));
console.log(str1.includes('Java'));
console.log(str1.includes('java'));

console.log(str1.substring(7)); //7번째 글자
console.log(str1.substring(7, 11)); //통합      7부터 10까지!
console.log(str1.substr(7, 4));
console.log('-----------------------');
const str2 ='김사과,오렌지,반하나,이메론,배애리,채리';
const students = str2.split(',');       //split?
console.log(students);

for(let s in students){
    console.log(s, students[s]);    //s 인덱스가 넘어와서 찍힘  s= 0,1,2,3... students[s] = 김사과,오렌지....
}

console.log(str1.replace('안녕하세요','Hello')); //str1 안녕하세요 ->Hello 대체

const str3 = '          JavaScript          ';
console.log(`⚾${str3}⚾`);
console.log(`⚾${str3.trim()}⚾`);          

