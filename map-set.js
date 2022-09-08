let number = [1, 4, 9];
let root = number.map(Math.sqrt)
console.log(root)

let obj = [
    {key: 1, value: 10},
    {key: 2, value: 20},
    {key: 3, value: 30}
]
console.log(obj);

let array = obj.map((objec) => {
    let robj = {};
    robj[objec.key] = objec.value;
    console.log(robj);
})
console.log(`map
============================================================================================
set`)
const set = new Set();
console.log(set);

const set1 = new Set([1,2,3,4])
console.log(set1)

const set2 = new Set('hello');
console.log(set2)
//중복 제거

const set3 = new Set([4,1,2,3,4,4,2,2,1]);
console.log(set3)