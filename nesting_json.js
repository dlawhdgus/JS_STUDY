const user = {
    names : {
        house : [{name : "kim"},{name : "lee"},{name : "lim"}]
    },
    person : {
        first : "kim_one",
        second : "kim_second"
    },
    age : {
        first : 30,
        second : 20
    }
}
const json_str = JSON.stringify(user)
console.log(json_str) //중첩 json형도 문자열 ㄱㄴ
console.log(user)
/*
{
    names: { house: [ [Object], [Object], [Object] ] },
    person: { first: 'kim_one', second: 'kim_second' },
    age: { first: 30, second: 20 }
}
*/

console.log(user.names)
// { house: [ { name: 'kim' }, { name: 'lee' }, { name: 'lim' } ] }

console.log(user.names.house)
//[ { name: 'kim' }, { name: 'lee' }, { name: 'lim' } ]

console.log(user.names.house[0])
//{ name: 'kim' }

console.log(user.names.house[0].name) 
//kim

console.log(user.person)
//{ first: 'kim_one', second: 'kim_second' }

console.log(user.person.first)
//kim_one

console.log(user.age)
// { first: 30, second: 20 }

console.log(user.age.first)
//30





