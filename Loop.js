let userInfo = {
    name : "lim",
    age : "19",
    address : "sanbon"
}

for(key in userInfo){
    console.log(`${key} : ${userInfo[key]}`)
}

const arr = ['a','b','c','d'];

arr.forEach((item, index, arr) => {
    console.log(`index : ${index} | item : ${item} | arr[${index}] : ${arr[index]}`)
})

for(let i in userInfo){
    console.log(userInfo[i])
}

let arrA = [0,1,2,3,4,5,6,7];

for(let i of arrA){
    console.log(arrA[i])
}


//return object

console.log(Object.keys({name : "park", job : "programer"}))
console.log(Object.values({name : "park", job : "programer"}))
console.log(Object.entries({name : "park", job : "programer"}))

//for ... in 문은 객체를 순환 하고
//for ... of 문은 배열의 값을 순환 한다.