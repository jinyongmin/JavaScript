let input = prompt('아동, 청소년, 성인 중 하나를 고르세요');

switch(input){
    case '아동':
        input += ': 입장료 무료';   //'아동: 입장료 무료'
        break;

    case '청소년':
        input += ': 입장료 15,000원'; //'청소년: 입장료 15,000원'
        break;
    case '성인':
        input += ': 입장료 25,000원';   //'성인: 입장료 25,000원'
        break;
    
    default:
        alert('입력값을 확인하세요');
        input ='입력값 확인!';
    
    }
    console.log(input);