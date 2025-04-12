function timeConsuming(){
    let sum = 0;
    for (let i = 0; i < 10000; i++ ){
        sum += i;
    }
    console.log(sum);
    
}
let start = performance.now();
timeConsuming();
let end = performance.now();
console.log(end - start);