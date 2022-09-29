const condition = true;
const promise = new Promise((resolve, reject) => {
    if(condition){
        resolve('sucess!!')
    } else {
        reject('failed');
    }
})
promise
  .then((message) => {
    console.log(message)
  })
  .catch((message) => {
    console.log(message)
  })
