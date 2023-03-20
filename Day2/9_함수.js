function fun1(){
    console.log('func1() 호출');
}   //호이 o
console.log('------------------');

const func2 = function(){
    console.log('func2() 호출');
}
fun1();
console.log('-----------------');
func2();

function func3(num){
    console.log(`전달받은 매개변수의 값: ${num}`);
}

func3(10);
func3(`apple`);
func3(true);

function func4(start,end) {
    let sum =0;
    for(let i=start; i<=end; i++){
        sum +=i;
    }
    console.log(`${start}부터 ${end}까지의 총합: ${sum}`);
}

func4(1,100);
func4(1);                               // 1,매개변수값 지정X -->계산이 안되는건가??
console.log('----------------------');
func4(1,10);

function func5(){
    return '⚽';
}
func5();
console.log(func5());
const ball =func5();
console.log(ball);
console.log(`----------------`);

function func6(x1, ...x2){
    console.log(`x1의 값: ${x1}`);
    console.log(`x2의 값: ${x2}`);
    for(i in x2){
        console.log(`i의 값: ${i}, x2[i]: ${x2[i]}`);
    }
}

func6(30, 50, 60, 90, 100, 20, 40);
// x1의 값: 30
// x2의 값: 50,60,90,100,20,40
// i의 값: 0, x2[i]: 50             x2[i]:  i는 왜 고정?
// i의 값: 1, x2[i]: 60
// i의 값: 2, x2[i]: 90
// i의 값: 3, x2[i]: 100
// i의 값: 4, x2[i]: 20
// i의 값: 5, x2[i]: 40
console.log('------------------------');
func6(1,2,3);
// x1의 값: 1
// x2의 값: 2,3
// i의 값: 0, x2[i]: 2
// i의 값: 1, x2[i]: 3
console.log('---------------------------------');

function func7(num1=1, num2=1){
    console.log(`num1의 값: ${num1}, num2의 값: ${num2}`);
    console.log(`num1의 값: ${num1}*${num2} = ${num1 * num2}`);

}
func7(2,8);

//보너스!
(function(){
    console.log(`함수를 만들고 바로 호출합니다!`);
})();