import express from "express";
import path from "path";
import cors from "cors";
var server = express();
//server.use(cors);
const PORT = process.env.PORT || 3000;
server.use("/", cors(), express.static("website"));
server.use("/2", express.static("website/second.html"));

server.use(express.json());
//server.use(express.urlencoded());
server.get("/3", function (req, res) {
  try {
    res.sendFile("website/index.html");
  } catch (error) {
    res.send("ERROR");
    console.log(error);
    console.log("\x1b[36m%s\x1b[0m", __dirname);
    console.log(__filename);
  }
});

for (let i of [5, 6, 7, 8]) {
  server.use(`/${i}`, (req, res) => {
    res.send("This is " + i + ` from ${req.query.name}`);
    console.log(req);
  });
}
server.listen(PORT, () =>
  console.log("Server up and running on port :" + PORT)
);

server.post("/handle", cors(), (request, response) => {
  console.log(request.ip + " ---> " + request.body);
  let incoming = 87; // request.body;
  response.send(`<h1>Done</h1> ${JSON.stringify(request.body)}`);
  response.end();
});
