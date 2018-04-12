console.log('Starting app');

setTimeout(() => {
  console.log('inside');
}, 2000);

setTimeout(() => {
  console.log('other inside');
},0);




console.log('Finishing up');
