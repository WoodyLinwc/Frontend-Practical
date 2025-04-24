

// object can also use find()
const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" }
  ];
  
  users
    .find(user => user.id === 2) // Returns { id: 2, name: "Bob" }
    .name.toUpperCase(); // "BOB" (chain on the found object)


      
    users.forEach(user => {
    console.log(`${user.id}: ${user.name}`);
    });