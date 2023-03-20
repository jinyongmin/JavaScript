let dog = {
    name:'루시',
    age:13,
    'dog-weight':3.5,   //특수문자 쓸때 ''필요!
    ['dog-height']:0.8  //속성접근
}
console.log(dog);    //{ name: '루시', age: 13, 'dog-weight': 3.5, 'dog-height': 0.8}
 console.log(dog.name);          //name만 입력시 안나옴 , dog.name으로!
 
 
 console.log(dog.age);       //안나옴 dog.age로!
 console.log(dog['age']);    //무슨 차이가 있을까? 위에 아래 <같은거!>


