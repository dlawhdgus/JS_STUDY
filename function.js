function hello(i) {
    console.log(`${i}번님 안녕하세요`)
}
hello(1)

let add = function (a,b) {
    console.log(a+b)
}
add(3,7)

function first() {
    function second() {
        console.log("hi")
    }
    second()
}
first()

// function buy_normal(item, price, quantity) {
//     console.log(item + " 상품을 " + quantity + "개 골라서 점원에게 주었습니다.");
//     console.log("계산이 필요합니다.");
//     var total = price*quantity;
//     return total;
// }

// function pay(tot) {
//     console.log(tot + "원을 지불하였습니다.");
// }

// var tot = buy_normal("고구마", 1000, 5);
// pay(tot);

// function buy_asis(item, price, quantity) {
//     console.log(item + " 상품을 " + quantity + "개 골라서 점원에게 주었습니다.");
//     setTimeout(function() {
//         console.log("계산이 필요합니다.");
//         var total = price*quantity;
//         return total;
//     }, 1000);
// }

// var tot = buy_asis("고구마", 1000, 5);
// pay(tot);

// function buy_tobe(item, price, quantity, callback) {
//     console.log(item + " 상품을 " + quantity + "개 골라서 점원에게 주었습니다.");
//     setTimeout(function() {
//         console.log("계산이 필요합니다.");
//         var total = price*quantity;
//         callback(total);
//     }, 1000);
// }

// buy_tobe("고구마", 1000, 5, function(tot) {
//     console.log(tot + "원을 지불하였습니다.");
// });

function a(a) {
    console.log(`${a}`)
}
a(3)

const b = (b) => {
    console.log(`${b}`)
}
b(4)