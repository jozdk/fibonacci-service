const http = require("http");
const url = require("url");
const util = require("util");

const argUrl = process.argv[2];
const parsedUrl = url.parse(argUrl, true);
const parsedUrl2 = new URL(argUrl);

const options = {
    host: parsedUrl.hostname,
    port: parsedUrl.port,
    path: parsedUrl.pathname,
    method: "GET"
};

if (parsedUrl.search) options.path += `?${parsedUrl.search}`;

console.log("legacy: ", parsedUrl);
console.log("new version: ", parsedUrl2);
console.log(parsedUrl2.searchParams);

// const req = http.request(options);

// req.on("response", (res) => {
//     console.log(`STATUS: ${res.statusCode}`);
//     console.log(`HEADERS: ${util.inspect(res.headers)}`);
//     res.setEncoding("utf-8");
//     res.on("data", (chunk) => {
//         console.log(`BODY: ${chunk}`);
//     });
//     res.on("error", (err) => {
//         console.log(`RESPONSE ERROR: ${err}`);
//     });
// });

// req.on("error", (err) => {
//     console.log(`REQUEST ERROR: ${err}`);
// });

// req.end();