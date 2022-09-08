let obj = {
    name : "lim",
    gender : 'male',
    age : 19
}

let arr = [1,2,3,4];

arr.forEach((item,index,arr) => {
    console.log(arr[item])
});

for (const key in obj) {
    console.log(`${key} : ${obj[key]}`)
}
console.log(obj.name)

arr.map((item,index,arr) => {
    console.log(`itme : ${item} | index : ${index} | arr : ${arr[index]}`)
})