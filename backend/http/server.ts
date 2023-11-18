import express from "express";

const server = express();
const port = 8080;

server.listen(port, () => {
    console.log(`koxy-ai server listening on port ${8080}`);
})