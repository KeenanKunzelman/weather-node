var asyncAdd = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a === 'number' && typeof b === 'number') {
        resolve(a + b);
      }else {
        reject('Arguments must be numbers')
      }
    }, 1500)
  });
};

asyncAdd(5,7).then((res) => {
  console.log('Result: ', res);
  return asyncAdd(res, 33);
}, (errorMessage) => {
  console.log(errorMessage);
}).then((res) => {
  console.log("should be higher: ", res);
}).catch((errorMessage) => {
  console.log(errorMessage);
})


//
// var somePromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("a fook u");
//     //resolve('Hey. It worked!');
//   }, 2500);
// });
//
//
// somePromise.then((message) => {
//   console.log('success: ', message);
// }, (errorMessage) => {
//   console.log("error: ", errorMessage);
// })
