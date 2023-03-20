class Employee{
    constructor(name, dep, time, payRate){
        this.name=name;
        this.dep=dep;
        this.time=time;
        this.payRate=payRate;
    }
    calculatePay(){
        return this.time * this.payRate;
    }
}
class FullTimeEmployee extends Employee{
    static payRate = 20000;
    constructor(name, dep, time){   //상속받는이유: 부모의 메소드를 사용하기 위해서  나머지는 상속안받고 써도 무관하지않나?
        super(name, dep, time, FullTimeEmployee.payRate);
    }
}
class PartTimeEmployee extends Employee{
    static payRate = 10000;
    constructor(name, dep, time){
        super(name, dep, time, PartTimeEmployee.payRate);
    }
}
const Kim = new FullTimeEmployee('김사과', '개발자', 160);
console.log(Kim.calculatePay());
const Ban = new PartTimeEmployee('반하나', '디자이너', 100);
console.log(Ban.calculatePay());
//class Employee{
// constructor(name,job,hoursPermonth,payRate){
//     this.name = name;
//     this.job = job;
//     this.hoursPermonth = hoursPermonth;
//     this.payRate = payRate;

// }
// calculatePay(){
//     return this.hoursPermonth * this.payRate;
// }


// }
// class FullTimeEmployee extends Employee {
//     static payRate = 20000;
//     constructor(name,job,hoursPermonth){
//         super(name,job,hoursPermonth,FullTimeEmployee.payRate);
//     }

// }


// class PartTimeEmployee extends Employee{
//     static payRate = 10000;
//     constructor(name,job,hoursPermonth){
//         super(name,job,hoursPermonth,PartTimeEmployee.payRate);
//     }




// }
// const Kim = new Employee('김사과','개발자', 160);
// const ban = new Employee('반하나','디자이너',100);
// console.log(Kim.calculatePay());
// console.log(ban.calculatePay());