function parents() {
    this.a = "abc";
    this.b = "bcd";
}



parents.prototype
parents.prototype.name = "lim";
const son = new parents()
//자식이 부모의 값을 끌어서 쓸 수 있다.
console.log(son)
console.log(son.name)