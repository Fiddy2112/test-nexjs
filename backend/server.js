const express = require("express");
const next = require("next");

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // xu ly tat ca cac routing trong thu muc pages nextjs
  server.all("*", (req, res) => {
    return handle(req, res);
  });

  //custom routing - khong ton tai trong thu muc pages nextjs
  server.get("./test-backend", (req, res) => {
    res.send("Welcome express nodeJS");
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Server ready on http://localhost:${port}`);
  });
});
