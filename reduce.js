const number = [1,2,3,4,5,6,7,8,9,10];

const sum = number.reduce((accumulator, currendNumber) => accumulator + currendNumber);

console.log(`sum = ${sum}`)

const members = [
    {
        name : 'lee',
        age : 20
    },
    {
        name : "park",
        age : 30
    },
    {
        name : "kim",
        age : 10
    }
];
const ageSum = members.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.age;
},0);
console.log(ageSum);

const arr = [7,6,5,4];

function func(accumulator, currentValue, currentIndex, array) {
  console.log("acc: " + accumulator + ", cur: " + currentValue
    + ", curIndex: " + currentIndex + ", array: " + array[currentIndex]);
  return accumulator + currentValue;
}

const initialValue = 0;
const sumWithInitial = arr.reduce(func,0/* 0 대신에 initialValue 가능 초깃값 설정 */);
