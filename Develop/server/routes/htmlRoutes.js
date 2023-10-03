const path = require("path");

module.exports = (app) =>
  app.get("/", (req, res) => {
    console.log("here in route");
    res.sendFile(path.join(__dirname, "../client/index.html"));
  });
