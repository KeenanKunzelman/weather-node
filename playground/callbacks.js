var getUser = (id, callback) => {
  var user = {
    id,
    name: 'Vikram'
  };
  callback(user);
};


getUser(33, (user) => {
  console.log(user);
})
 
