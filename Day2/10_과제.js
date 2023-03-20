// 주민등록번호 입력프로그램.
// 1. 입력창 만들기
// 2. 입력한숫자의 갯수가 13개라면 유효, 13개 아니라면 유효x
//2-1 for문 -> if문을 사용하면 될까?
const Pnum = prompt('당신의 주민등록번호를 입력하세요("-"없이 입력)');  //const 상수값 변수 Pnum은 사용자에게 입력을 요청하는 prompt상자를 홈페이지에 띄움
let save = [];  //입력받은값을 저장할 공간을 만듬

for (let i = 0; i < Pnum.length; i++) {save.push(Pnum.substring(i, i + 1));} //i는 0부터 입력받은 길이까지 i++ (조건) save배열에 추가한다 어떤걸? 입력받은 Pnum을 0번째부터 12+1 -->배열[]에다 넣기 때문에 12+1을 하는걸까
const num = [2, 3, 4, 5, 6, 7, 8, 9, 2, 3, 4, 5];
let total = 0;

for (let i = 0; i < num.length; i++) {total += save[i] * num[i];}
let valid = total % 11;
if (valid == 10) {valid = valid % 10; }
if (11 - valid == save[12]) {console.log("유효한 주민등록번호입니다.");}
else {console.log("유효X!!");}