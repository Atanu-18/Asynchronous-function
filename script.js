//! asynchronous function

//? this is not interpreted--------

console.log("Hello from outside");

setTimeout(() => {
    console.log("Hello from inside");
}, 5000)

console.log("Bye from outside");
