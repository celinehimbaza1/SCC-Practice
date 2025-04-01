function greeting(name, callback) {
  console.log(`Hello ${name}`);
  callback();
}

function add(a, b) {
  console.log(a + b);
}
greeting("Celine", function() {
  add(2,4);
});