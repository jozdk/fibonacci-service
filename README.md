# Fibonacci Service

A web service for [Fibonacci numbers](https://en.wikipedia.org/wiki/Fibonacci_number): Input a number and get its Fibonacci number from the server.

## Purpose

The main goal of this project is to **explore different solutions to maintaining heavy computational operations in a Node.js application**, **get familiar with the Node.js event loop** and **develop REST APIs**. You will thus find three different versions of a router in this project. One (`routes/fibonacci.js`) demonstrates the problem of a long-running task that blocks the Node.js event queue, rendering the server unresponsive to further requests from the web. For this, it deliberately uses a slow, inefficient algorithm for calculating Fibonacci numbers. Another version (`routes/fibonacci-async.js`) makes use of an asynchronous implementation of the algorithm, dispatching the computations through the event loop, so that the server is free to handle other requests in the meantime. A third router (`routes/fibonacci-rest.js`) solves the problem by offloading the Fibonacci calculations to a separate server.

## Architecture

This project incorporates a multi-tier architecture of two servers, one of which functions as a web server, serving content to the Browser, while an application server calculates the Fibonacci numbers and delivers them to the web server. Both of the servers are built with Node.js/Express and expose REST-based APIs. The HTML is rendered on the server-side with Handlebars.

Additionally, there are scripts to
- make HTTP requests from the Command Line
- loop through a series of HTTP requests to the Fibonacci server
- measure and log the calculation time of different Fibonacci algorithms,   

all of which come in handy for experimenting.

## Usage

### Requirements

Tested on Ubuntu 22.04 & Node.js 16

### Main application

To run this application locally, run these commands in separate terminal instances:
1. `npm run start:webserver`
2. `npm run start:fiboserver`

Then go to `localhost:3000` in your Browser to see the web page.

### Additional scripts

**Try out the different router versions by uncommenting either:**
1. `const fibonacciRouter = require("./routes/fibonacci.js");`
2. `const fibonacciRouter = require("./routes/fibonacci-async.js");` or
3. `const fibonacciRouter = require("./routes/fibonacci-rest.js");` (currently in use)   

and commenting out the other two in `webserver.js`.

**To make HTTP requests from the Command Line, run:**   

`node cli-get <URL>`

**To make a series of HTTP requests to the Fibonacci server:**   

(Start the server with `npm run start:fiboserver` and) run `npm run fiboclient`.    
Of course, you can make changes to the array of paths to loop through, as you like.

**To measure and log the calculation time of different Fibonacci algorithms:**
| Test algorithm | Command |
| --- | --- |
| recursion-based algorithm | `node fibotimes recursion` |
| loop-based algorithm | `node fibotimes loop` |
| asynchronous recursion-based algorithm | `node fibotimes async-recursion`|

Adjust the condition of the loop for the length of the Fibonacci sequence you want to test.

---

This project was built (in part) following the instructions of 'Node.js Web Development - Fifth Edition' by David Herron