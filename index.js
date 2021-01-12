const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const db = require("./config/db");
db.authenticate()
  .then(() => {
    console.log("Database connected...");
  })
  .catch((err) => {
    console.log("Error: " + err);
  });

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors("*"));

const PORT = process.env.PORT || 3000;
db.sync().then(() => {
  app.listen(PORT, console.log(`Server started on port ${PORT}`));
});
app.use("/", require("./routes/routes"));
