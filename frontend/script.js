// Write the Frontend tasks here
// 2
// console.log("Client");
// console.log("Client".split("").reverse().join(""));
// console.log("Client".length);
// console.log("Client".length * 3);
// console.log("Client".length / 5);

// 3
let delay = 800;

setTimeout(function() {
    console.log("Client");
}, delay);
delay += 800;

setTimeout(function() {
    console.log("Client".split("").reverse().join(""));
}, delay);
delay += 800;

setTimeout(function() {
    console.log("Client".length);
}, delay);
delay += 800;

setTimeout(function() {
    console.log("Client".length * 3);
}, delay);
delay += 800;

setTimeout(() => console.log("Client".length / 5), delay);