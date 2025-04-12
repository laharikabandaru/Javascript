const promise1 = new Promise((resolve, reject)=>{setTimeout(()=>resolve('First'),1000)});
const promise2 = new Promise((resolve, reject) =>{setTimeout(()=>reject('second'), 2000)});
const promise3 = new Promise((resolve,reject)=>{setTimeout(()=>resolve('third'),3000)});
Promise.all([promise1,promise2,promise3]).then((value) =>{console.log(value)}) .catch((error) => {console.log(error)});
Promise.any([promise1,promise2,promise3]).then((value) =>{console.log(value)}) .catch((error) => {console.log(error)});
Promise.allSettled([promise1,promise2,promise3]).then((value) =>{console.log(value)}) .catch((error) => {console.log(error)});
Promise.race([promise1,promise2,promise3]).then((value) =>{console.log(value)}) .catch((error) => {console.log(error)});                    