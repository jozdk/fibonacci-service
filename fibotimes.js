const math = require("./math");

const argAlgorithm = process.argv[2];

if (argAlgorithm === "recursion") {
    console.log("Recursion");
    for (var num = 1; num <= 40; num++) {
        let now = new Date().toISOString();
        console.log(`${now} Fibonacci for ${num} = ${math.fibonacci(num)}`);
    }
} else if (argAlgorithm === "loop") {
    console.log("Loop");
    for (let num = 1; num <= 1000; num++) {
        let now = new Date().toISOString();
        console.log(`${now} Fibonacci for ${num} = ${math.fibonacciLoop(num)}`);
    }
} else if (argAlgorithm === "async-recursion") {
    console.log("Async-recursion");
    (async () => {
        for (let num = 1; num <= 40; num++) {
            await new Promise((resolve, reject) => {
                math.fibonacciAsync(num, (err, fibo) => {
                    if (err) reject(err);
                    else {
                        let now = new Date().toISOString();
                        console.log(`${now} Fibonacci for ${num} = ${fibo}`);
                        resolve();
                    }
                })
            })
        }
    })().catch((err) => console.log(err));
} else {
    console.log("No argument provided");
}