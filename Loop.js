let userInfo = {
    name : "lim",
    age : "19",
    address : "sanbon"
}

for(i in userInfo){
    console.log(`${i} : ${userInfo[i]}`)
}

const arr = ['a','b','c','d'];

arr.forEach((item, index, arr) => {
    console.log(`index : ${index} | item : ${item} | arr[${index}] : ${arr[index]}`)
})