let arr = [10,20,30];
arr.push(40);

console.log(arr);

arr.pop();          //40
console.log(arr);

arr.shift();        //10
console.log(arr);

let arr2 = [100, 200, 300 ,400];
let arr3=arr2.concat(arr);  //arr3= arr2.concat(arr);
console.log(arr3);          //arr3 호출

let arr4 = [1,2,3,4];
const arr5 =arr4.join('⚽');
console.log(arr5);

let arr6 = [5,6,7,8,9];

console.log(arr6);
arr6.reverse();

let arr7 =[1,5,3,7,2];

// console.log(arr7.sort());
arr7.sort();
console.log(arr7);

const arr8 = ['userid','userpw','name','Hp'];
for(let i in arr8){      //가장 많이 사용
    console.log(`i=${i}, arr[i]: ${arr8[i]}`);
}