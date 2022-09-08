const arr = [1,2,3,4];

console.log(arr);
arr.push(...[1,2]);
console.log(arr);
console.log(...arr)

const obj = {
    name : "lee",
    gender : 'male',
    age : 19,
    address : "sanbon"
};

for(i in obj){
    console.log(`${i} : ${obj[i]}`)
}
// console.log(`${Object.keys(obj)[0]} : ${obj.name}`)
// console.log(`${Object.keys(obj)[1]} : ${obj.gender}`)
let {name,gender, ...c} = obj;   //점점점(...) 은 나머지 값을 출력 시킨다.
console.log(name, gender, c)