// Write the Backend tasks here
// 1
// console.log("Server");
// console.log("Server".split("").reverse().join(""));
// console.log("Server".length);
// console.log("Server".length * 3);
// console.log("Server".length / 5);

// 3
let delay = 800;

setTimeout(function() {
    console.log("Server");
}, delay);
delay += 800;

setTimeout(function() {
    console.log("Server".split("").reverse().join(""));
}, delay);
delay += 800;

setTimeout(function() {
    console.log("Server".length);
}, delay);
delay += 800;

setTimeout(function() {
    console.log("Server".length * 3);
}, delay);
delay += 800;

setTimeout(() => console.log("Server".length / 5), delay);