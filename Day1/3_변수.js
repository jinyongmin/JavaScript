//변수 선언에는 var와 let이 있다.
//var 변수선언을 안해도 나온다
// str 은 변수타입선언을 안했는데 log에 출력이 된다!

var num;        
num = 10;
console.log(num);

str = '안녕';               //타입을 적지 않고 변수에 값을 저장하고 log(변수)를 하면 값이 나온다 왜 그럴까?
console.log(str);
var str ='반가워';          //나중에 str에 var 타입을 써주고 log로 출력해도 문제가 없다! 왜??
console.log(str);
                                //전역변수 --> 전체 범위
{                               //지역변수{} -->지역 범위안에서만  지역변수에서 선언된 변수는 
                                // 전체범위에서 출력이 가능하다 + 덮어쓰기도 가능하다
    console.log(num);
    var num2 = 20;
    console.log(num2);
    var num = 30;
    console.log(num);
}
console.log(num2);
console.log(num);
console.log('---------');


let val = 10;                   //let은 변수의 다른 버전
console.log(val);

//let val = 20; 같은이름으로 만들 수 x
{
    console.log(val);
    let val2 = 20;
    console.log(val2);
    // let val = 30;
}
// console.log(val2);