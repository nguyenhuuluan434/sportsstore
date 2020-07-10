const express = require("express");

const jsonServer = require("json-server");

const cors = require("cors");

const chokidar = require("chokidar");

const fileName = process.argv[2] || "./data.js"

let router = undefined
const createServer = () => {
    delete require.cache[require.resolve(fileName)]
    setTimeout(() => {
        router = jsonServer.router(fileName.endsWith(".js") ? require(fileName)() : fileName)
    }, 100);
}

createServer();

const app = express();

app.use(cors());
app.use(jsonServer.bodyParser)
app.use("/api", (req, resp, next) => router(req, resp, next));
chokidar.watch(fileName).on("change", () => {
    console.log("Reloading web service data...");
    createServer();
    console.log("Reloading web service data complete.");
});

const port = process.argv[3] || 3500;
app.listen(port, () => console.log(`Web service running on port ${port}`));