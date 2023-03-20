class Animal {
    constructor(color){
        this.color = color;
    }
    eat(){
        console.log('먹는다!');
    }
    sleep(){
        console.log('잔다!');
    }
}
class Dog extends Animal{
    play(){
        console.log('놉니다!');
    }
}

class Cat extends Animal{
    constructor(color, name){
        super(color);
        this.name = name;
    }
    // 오버라이딩
    eat(){
        console.log('맛있게 먹는다!');
    }
 }

const Rucy = new Dog('white');
console.log(Rucy);   //Dog { color: 'white' }
Rucy.eat();          //먹는다!
Rucy.sleep();       //잔다!
Rucy.play();        //놉니다!

const PPory = new Cat('black','뽀리');
console.log(PPory); //Cat { color: 'black', name: '뽀리' }
PPory.eat();        //맛있게 먹는다!