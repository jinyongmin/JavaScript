// const str;       X   const str; 변수를 선언 했는데 변수에 값을 다시 넣어주는건 불가능! 한번ㅇ ㅔ 해야함!
// str = '김사과';  X

const str ='김사과';            //한번에 한 const 상수 선언!
console.log(str);

// str = '반하나';              

const obj ={id:'apple', name:'김사과'}; //키와 벨류로 저장할 수 있음 참조변수에 lock을 건다, 안에 내용(heap)은 변경가능
                                        //object객체를 만들시 {} 중괄호를 쳐야한다  object 객체의 형태를 한번 만들면 바꾸는것x!
// obj=10;
obj.id = 'banana';                       
obj.name = '반하나';
console.log('--------------');
console.log(obj.id);
console.log(obj.name);