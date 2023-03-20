  // 객체를 만드는 템플릿
  //1. 생성자 함수
  //2. 클래스 -->
  //        static: 정적 프로퍼티
  
  class Fruit {     //객체 
    // eng = 'noname1';
    static count_fruits = 0;
    constructor(name,emoji){
        this.name = name;
        this.emoji = emoji;

    }
    display = () => {
        console.log(`${this.name}: ${this.emoji}`);
    }

    static makebanana(){    //별도로 메모리에 올라감
        // return 'banana';
        return new Fruit('banana','🍌');    //클래스 레벨 메서드에서는 this를 참조할 수 없음
    }
    
  }
  //stw는 Fruit 클래스의 인스턴스
  const stw = new Fruit('stw','🍓');

  //apple은 Fruit 클래스의 인스턴스
  const apple = new Fruit('apple','🍎');

  console.log(apple);
  console.log('--------------');
  console.log(stw);
  console.log(stw.name);
  console.log(apple.emoji);
  apple.display();
  console.log('--------------------');
  const banana = Fruit.makebanana();
  console.log(banana);
  console.log(Fruit.count_fruits);

  console.log('--------------------');

  class Dog{
    #name;
    #color;

    constructor(name,color){
        this.#name = name;
        this.#color = color;

    }
    get info(){ //getter메소드
        return `이름:${this.#name}, 색상:${this.#color}`;   //메소드가 아닌 프로퍼티역할
    }
    set info(value){        //가격을 받아서 처리
    console.log('set',value);
    this.#name = value;

    }
    run = () => {
        console.log(`${this.#color}색상의 강아지${this.#name}는 달립니다`);
    }
    #eat = () => {
        console.log(`${this.#name}는 먹습니다`);
    }
  }
  const Rucy = new Dog('루시','white');
  console.log(Rucy);        //프라이빗 볼수도 x 확인도 x
  //SyntaxError: Private field '#name' must be declared in an enclosing class
//   Rucy.#name = '개똥이';   //#field는 외부에서 접근이 불가능함  새롭게 만든것 
   console.log(Rucy);
  //자바는 private필드를 막아줄수 있음 ,js는#
  Rucy.run();
  console.log('-------------------');
  //  Ruct.eat();
//   console.log(#eat);
//   console.log(Rucy.info());
console.log(Rucy.name);   //undefined
// console.log(Rucy.info());
console.log(Rucy.info);     //get역할 확인      

Rucy.info = '뽀미';         //set역할 출력하면 저장
console.log(Rucy.info);