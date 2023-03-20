//dog은 객체이고, 어떤 클래스의 인스턴스도 아님
let dog = {
    name:'루시',
    age:13,
    'dog-weight':3.5,   //특수문자 쓸때 ''필요!
    ['dog-height']:0.8  //속성접근
}

console.log(dog.name);
console.log(dog['age']);

dog.family = '포메';    //필드 추가하기
console.log(dog.family);
console.log(dog['family']);

delete dog['dog-height'];
console.log(dog['dog-height']); //delete 된 상태에서 출력했을때 undefined 값이 나옴
console.log('------------------------');

// 동적으로 속성에 접근하고 싶을 때
function getValue(obj, key){        //???
    //dog.name 강아지 이름 출력하고싶을때
    return obj[key];
}
console.log(getValue(dog, 'name')); //obj 객체는 dog, key는 name //루시

//필드를 추가
//addKey
// obj, 필드명, 값

//필드를 삭제
//deleteKey
// obj, 키
console.log('--------------------------');
function addKey(obj, key, value){       //???
    obj[key] = value;

}
function deleteKey(obj, key){           //???
    delete obj[key];
}
addKey(dog, 'dog-height',0.7);          //객체dog 에 키dog-height 에 0.7 추가!
console.log(dog);                       //출력

deleteKey(dog, 'dog-height');           //객체 dog의 key 'dog-height'삭제 //자동으로 값 0.7삭제
console.log(dog);
console.log('------------------------');

const x= 0;
const y= 0;
// const coord ={x: x, y: y};         //키값이 x 키값이 y
const coord = {x,y};
console.log(coord);

//객체 생성 함수
function makeObj(name, age){
    return{
    name, age
    };
}
console.log(makeObj('apple', 20));

//생성자
const apple = { //객체
    name:'apple',
    display: function(){
        console.log(`${this.name}:⚽`);
    }
}
const orange = {    //객체
    name: 'orange',
    display: function(){
        console.log(`${this.name}:⚾`);
    }
}

console.log(apple);
apple.display();
console.log(orange);
orange.display();

//생성자함수
function Fruit(name,emoji){
    this.name = name;
    this.emoji = emoji;
    this.display = () => {
        console.log(`${this.name}: ${this.emoji}`); 
    }
    //return this; //생략가능
}

const apple2 = new Fruit('apple','⚽'); //객체 이면서 인스턴스
const orange2 = new Fruit('apple','⚾');//객체 이면서 인스턴스

console.log(apple2);
apple2.display();
console.log(orange2);
orange2.display();

//객체 생성 방법 자바스크립트 생성자와 동일