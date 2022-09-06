console.log(zero);

sayWow();  //함수를 밑에다 선언했는데 실행이 됨
function sayWow() {
    console.log('wow');
};

var zero = 'zero';

saywow();
sayyeah(); //선언해주는 hoisting은 에러가 나버림

var sayyeah = function () {
    console.log('yeah');
}
function saywow(){
    console.log('wow');
}