const http = require("http");
const util = require("util");

const argUrl = process.argv[2];
const parsedUrl = new URL(argUrl);

const options = {
    host: parsedUrl.hostname,
    port: parsedUrl.port,
    path: parsedUrl.pathname,
    method: "GET"
};

if (parsedUrl.search) {
    options.path += `?${parsedUrl.search}`;
}

const req = http.request(options);

req.on("response", (res) => {
    console.log(`STATUS: ${res.statusCode}`);
    console.log(`HEADERS: ${util.inspect(res.headers)}`);
    res.setEncoding("utf-8");
    res.on("data", (chunk) => {
        console.log(`BODY: ${chunk}`);
    });
    res.on("error", (err) => {
        console.log(`RESPONSE ERROR: ${err}`);
    });
});

req.on("error", (err) => {
    console.log(`REQUEST ERROR: ${err}`);
});

req.end();