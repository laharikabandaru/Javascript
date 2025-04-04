const myPromise = new Promise((resolve, reject) =>{
    let num = Math.random();
    if ( num > 0.5){
        resolve("this is happening" + num);
    }
    else{
        reject("sorry we are not processing" + num);
    }
});
myPromise.then((value)=>{console.log(value)}).catch((error) =>{console.log(error )});
