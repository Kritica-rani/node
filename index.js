// import all the packages
const http = require("http");
const PORT = 4000;
const fs = require("fs");

// const requestData = (req, res) => {
//   res.setHeader("Content-Type", "text/plain");
//   res.end("hello node");
// };
// make two more routes for the same, use the switch case to handle all the req
const requestData = (req, res) => {
  console.log("req/profile", req.url);
  if (req.url === "/profile") {
    fs.readFile("./profile.html", (err, data) => {
      if (err) {
        console.log("error in profile page", err);
        res.end("Ahaa eror while fetching");
      }
      return res.end(data);
    });
  } else {
    fs.readFile("./nodData.html", (err, data) => {
      if (err) {
        console.log("error in profile page", err);
        res.end("Ahaa eror while fetching");
      }
      return res.end(data);
    });
  }
};

const server = http.createServer(requestData);
//import the file
// const calculator = require("./calculator");
// const addition = calculator.add(5, 6);
// console.log("addition", addition);
// const subt = calculator.sub(5, 2);
// console.log("sub", subt);

console.log("hello Node");
// start server
server.listen(PORT, (err) => {
  if (err) {
    return console.log("error in starting server", err);
  }
  console.log("server is up and running", PORT);
});
