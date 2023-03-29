const express = require("express");
const bodyParser = require("body-parser");
const sequelize = require("./models");
const errorHandler = require("./middleware/errorHandler");

const port = 3002;
const app = express();

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(require("./routes/routes"));
app.use(errorHandler);

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection successful");
  })
  .catch((err) => {
    console.error("Unable to connect to db: ", err);
  });

const server = app.listen(port, (error) => {
  if (error) return console.log(`Error: ${error}`);
  console.log(`Server listening on port ${server.address().port}`);
});
