const fs = require("fs");
const crypto = require("crypto");

const start = Date.now();
process.env.UV_THREADPOOL_SIZE = 3;
//Threadpool size is controlling the amount of processes (in this case cryptos) that can be done at the same time. e.g. now three are done at more or less the same time, while one remains to be done after the first three are finished.

setTimeout(() => console.log("Timer 1 finished"), 0);
setImmediate(() => console.log("Immediate 1 finished"));

fs.readFile("test-file.txt", () => {
  console.log("I/O finished");
  console.log("-------------");
  setTimeout(() => console.log("Timer 2 finished"), 0);
  setTimeout(() => console.log("Timer 3 finished"), 3000);
  setImmediate(() => console.log("Immediate 2 finished"));

  process.nextTick(() => console.log("Process.nextTick"));
  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log(Date.now() - start, " Password encrypted");
  });
  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log(Date.now() - start, " Password encrypted");
  });
  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log(Date.now() - start, " Password encrypted");
  });
  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log(Date.now() - start, " Password encrypted");
  });
});

console.log("Hello from top-level code");
