const axios = require("axios");
const Express = require("express");
const { appendFile } = require("fs");
const server = Express();
const cors = require("cors");
const path = require("path");

server.use(cors());

server.use(Express.static(path.join(__dirname, "react")));

server.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "react", "index.html"));
});

server.get("/id/*", (req, res) => {
  res.sendFile(path.join(__dirname, "react", "index.html"));
});

server.get("/api", (req, res) => {
  res.send("Steam Api Demo App Backend");
});

server.get("/api/search/:query", async (req, res) => {
  const reqQuery = req.params.query;

  async function axiosRes() {
    console.log("reqQuerySearch: " + reqQuery);
    const searchApiRes = await axios.get(
      `https://steamcommunity.com/actions/SearchApps/${reqQuery}`
    );
    return searchApiRes;
  }
  const resp = await axiosRes();

  res.json(resp.data);
});

server.get("/api/id/:query", async (req, res) => {
  const reqQuery = req.params.query;
  const reqQueryString = reqQuery.toString();

  async function axiosRes() {
    console.log("reqQueryID: " + reqQuery);
    const searchApiRes = await axios.get(
      `https://store.steampowered.com/api/appdetails?appids=${reqQuery}`
    );
    console.log(searchApiRes.data[reqQueryString]);

    return searchApiRes.data[reqQueryString];
  }
  const resp = await axiosRes();

  res.json(resp);
});

server.listen(3001, () => {
  console.log("Server is running on port 3001");
});
