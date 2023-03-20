const fun1 = () => console.log('안녕하세요 JavaScript!');
fun1();

//매개변수가 있는경우
const func2 =(x, y) =>console.log(`두 수의 합: ${x + y}`);
func2(10, 3);   //13

//리턴값을 한줄로 표현하고자 할 때

const func3 = (x) => x * x;
const result = func3(4);                    //16
console.log(`4의 제곱: ${result}`);         //result=16

const func4 =(x,y) =>{                      
    let sum=0;                              
    for(let i=x; i<=y; i++){                
        sum+=i;                             
    }
    return sum;
}
console.log('-----------------------');
const total = func4(1, 100);
console.log(total);

const age = 20;
const isAdult =(age > 18) ? () => console.log('성인입니다'):()=>console.log('미성년입니다');
isAdult();
//함수 자체가 저장이 가능하다 자바스크립트는 프로퍼티 처리가 가능, 변수가 프로퍼티 , 메소드도 프로퍼티 메소드

// const isAdult =(age > 18) > () => console.log('성인!') : () => console.log('미성년');   식 만들기