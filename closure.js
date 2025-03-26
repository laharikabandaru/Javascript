function outer(){
    let count=-5;
    function inner(){
        count--;
        return count;
    }
    return inner;
}
const decrementCount = outer();
console.log(decrementCount());
console.log(decrementCount());
console.log(decrementCount());
