function greeting(name, callback) {
  console.log(`Hello ${name}`);
  callback(); // Call the function
}

function add(a, b) {
  console.log(a + b); // Print the sum instead of returning
}

// Pass an anonymous function to call `add` with arguments
greeting("Celine", function() {
  add(2, 4);
});