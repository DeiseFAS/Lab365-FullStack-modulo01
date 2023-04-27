const express = require("express");
const {verify} = require("./middleware");
const router = require("./routes");
const app = express();

app.use(express.json());
app.use(verify);
app.use(router);

app.listen(3333, () => {
  console.log("servidor ON!!");
});
