const myPromise = new Promise((resolve,reject) =>{
    setTimeout(() =>{
        resolve("Promise is fulfilled after 3 seconds");
    }, 3000);
});
myPromise.then((name) =>{console.log(name+ "prints")}).catch((error) =>{console.log(error + "error" ); });

const myPromise1 = new Promise((resolve,reject) => {
    setTimeout(() =>{
        reject("Promise is fulfilled after 2 seconds");
    }, 2000);
});
myPromise1.then((name1) =>{console.log(name1)}).catch((error) =>{console.log(error + "error")})