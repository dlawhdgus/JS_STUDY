const promise = new Promise((resolve, resject) => {
    setTimeout(() => {
        const input = 10
        if(input < 10){resolve(input)}                          //결과가 참이면 resolve의 값이 then의 num으로 대입됨
        else{resject(`${input}은 10 이상이거나 숫자가 아닙니다.`)}     //결과가 거짓이면 reject의 값이 catch의 error로 대입됨
    }, 200);
})
promise
  .then(num => {console.log(num)})
  .catch(error => {console.log(error)})