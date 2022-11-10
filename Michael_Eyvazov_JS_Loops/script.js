function tenUsers() {
  const tenUsers = [];
  for (let i = 0; i < 10; i++) {
    let newUser = prompt("Please enter " + (i+1) + " User name" );
    tenUsers.push(newUser);
  }
  tenUsers.forEach(printUsersName);
  function printUsersName(users) {
    console.log(users);
  }
}