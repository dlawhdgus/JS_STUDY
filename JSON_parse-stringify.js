let obj_user = {
    name : 'John',
    age : 30
}
let array_user = JSON.stringify(obj_user)
console.log(array_user)  //객체를 문자열로 바꾼것을 출력
const change_array_user = JSON.parse(array_user, (key , value) => key === "age" ? value +3 : value) //객체에서 문자열로 바꾸었기 때문에 JSON.parse를 사용할 수 있다.
console.log(change_array_user) 

// JSON.parse -> 문자열을 객체로 표현한다
// JSON.stringify -> 객체를 문자열로 표현한다

function replacerFunc(key, value) {
    if(key === "name") {
        return undefined
    }
    return value
}
const JSON_replacer = JSON.stringify(obj_user, replacerFunc)
console.log(JSON_replacer) //key의 값이 name 인 key는 undefined가 되어 {"age":30} 으로 출력되었다.
const JSON_variable = JSON.stringify(obj_user,null,5)
console.log(JSON_variable)