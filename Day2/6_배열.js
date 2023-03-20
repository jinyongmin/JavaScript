const arr = [1, 'apple','김사과',20,'서울','잠자기'];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);// 6 없는 자리에 배열을 부르면 undefined가 나옴


arr[5] ='먹기';     //잠자기--->먹기로 변경!
console.log(arr[5]);        //[6]은 undefined이 포함 x  ?????

console.log(arr.length);    //배열의 길이에 undefined 포함x

arr[7] ='A형';
console.log(arr[6]);    //unde
console.log(arr[7]);    //7번에 값을 만들고 출력하면 6번도 []길이 생김

console.log(arr.length);
console.log('-------------------'); 
for(let i=0; i<arr.length; i++){    //0번에서 7번까지 길이안의 값을 출력?
    console.log(arr[i]);
}

console.log('-------------------');
// const arr = [1, 'apple','김사과',20,'서울','잠자기'];
arr.push('여자');
console.log(arr);

arr.shift();            //(0번째)값이 날라감 
console.log(arr);

const sub =['isfp', '천칭자리'];

const arr_concat= arr.concat(sub);      //concat 합쳐짐
console.log(arr_concat);



const arr_join = arr.join('🍓');        //스트링으로 변환됨 arr.join 이 리턴되는 왼쪽이 스트링
console.log(arr_join);
console.log(typeof(arr_join));

const arr2 =['a','z','c','f','r'];
arr2.sort();    //오름차순

console.log(arr2);
arr2.reverse()  //내림차순      나중에 재귀함수     내림차순 쓰려면 sort 먼저 사용후 reverse

console.log(arr2);
console.log('-------------------');
// const arr = [1, 'apple','김사과',20,'서울','잠자기'];

for(let i in arr){      //가장 많이 사용           let i in arr --> index
    console.log(`i=${i}, arr[i]: ${arr[i]}`);
}

console.log('-------------------');
for(let i of arr){      //가장 많이 사용            let i of arr --> value
    console.log(`i:${i}`);
}

console.log('-------------------');

arr.forEach(function(v,i,arr){                  //forEach 벨류, 인덱스 ,배열명 순
console.log(`v:${v}, i=${i}, arr:${arr}`);
// v:apple, i=0, arr:apple,김사과,20,서울,먹기,,A형,여자
// v:김사과, i=1, arr:apple,김사과,20,서울,먹기,,A형,여자
// v:20, i=2, arr:apple,김사과,20,서울,먹기,,A형,여자
// v:서울, i=3, arr:apple,김사과,20,서울,먹기,,A형,여자
// v:먹기, i=4, arr:apple,김사과,20,서울,먹기,,A형,여자
});
