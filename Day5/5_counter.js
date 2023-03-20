class Counter{
    #value;     //프라이빗
    constructor(value){
        if(isNaN(value)||value < 0){
            this.#value = 0;
        }else{
            this.#value = value;
        }
    }
    get value(){
        return this.#value;
    }
    increment = () => {
        this.#value++;
    }
}
const counter = new Counter(5); //0이 value로 이동
counter.increment();
counter.increment();
console.log(counter.value);