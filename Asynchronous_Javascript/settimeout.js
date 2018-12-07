console.log("Hello");

setTimeout(() => {
    console.log("GoodBye!");
}, 2000);

console.log("Hello Again");

/*
    Output:
    Hello
    Hello Again
    --Wait for 2 seconds
    GoodBye!
*/