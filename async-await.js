function getApple(){
    return new Promise( (resolve, reject) => {
        setTimeout(() => resolve("apple"), 1000);
})
}

function getBanana(){
    return new Promise( (resolve, reject) => {
        setTimeout(() => resolve("banana"), 1000);
})
}

function getFruites(){
    getApple()
        .then((a) => { //리턴값이 곧 resolve()니까 then 가능
        getBanana()
            .then((b) => console.log(`${a} and ${b}`)); 
        }) // 콜백지옥 
}

getFruites() // 결과 : apple and banana

//비동기 처리
function delay(){
    return new Promise( (resolve, reject) => {
      setTimeout(() => resolve(), 1000);
    })
  }
   
  async function getApple(){
    await delay();
    return "apple";
  }
   
  async function getBanana(){
    await delay();
    return "banana";
  }
   
  async function getFruites(){
    let a = await getApple(); //리턴값이 resolve()의 값이니까 대입 가능
    let b = await getBanana();
    console.log(`${a} and ${b}`);
  }
   
  getFruites(); // 결과 : apple and banana