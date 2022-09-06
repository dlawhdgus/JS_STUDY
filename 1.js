/* let x = 10;
let y = 20;

(x>y) && console.log(x);   //10 출력
// ||는 사용하지 않는다.

//if문으로 바꾼다면
if(x){
    console.log(x);    //10 출력
} else if (x === false) {
    console.log(y)
}

{
    let x = 10;
    let y = 20;

    x<y ? console.log("true") : console.log("false");  //true 출력
}




// console.log(`my car is ${a}`) //my car is undefined 출력 

// const av = "lim";




let num = 10;

const func = () => {
    let num = 20;
    console.log(num);
};

func(); //20 출력
console.log(num); //10 출력


*/





const obj = {
    name : "lim",
    age : 19,
    gender : 'male'
};

const { age, ...rest } = obj;

console.log(age);
console.log(rest);