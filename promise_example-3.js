function buySomething(nowMoney) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const pay = 1100
            const remain = nowMoney - pay
            if(remain >= 0){
                console.log(`${pay}원 지불`)
                resolve(remain)
            }
            else{reject(`잔액부족 현재잔액 ${nowMoney}원`)}
        },2000) //2초뒤 실행
    })
}

buySomething(1000)
  .then((remain) => {console.log(`잔액 : ${remain}`)})
  .catch((error) => {console.error(error)})