console.log(JSON.stringify("1"))

let user = {
    sayHi() { // 무시
        alert("Hello");
    },
    [Symbol("id")]: 123, // 무시
    something: undefined // 무시
};
//함수 속성, 심볼형 속성, 값이 undefined인 속성들을 무시한다
console.log( JSON.stringify(user) ); // {} (빈 객체가 출력됨)       

let meetup = {
    title: "Conference",
    room: {
      number: 23,
      participants: ["john", "ann"]
    }
};
  
console.log( JSON.stringify(meetup,null,'ㅁ'));