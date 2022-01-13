import express from "express";
import path from "path";
const server = express();
const PORT = 3000;
server.use("/", express.static("website"));
server.use("/2", express.static("website/second.html"));
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
server.listen(PORT, () => console.log("Server up and running"));
