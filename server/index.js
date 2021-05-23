const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(express.urlencoded());
require("dotenv").config();

console.log(process.env.DB_USERNAME);

// const PORT = 3001;
// app.use(
//   cors({
//     origin: `http://localhost:3000`,
//   })
// );

// app.get("/register", (req, res) => {
//   res.send("here you go");
// });

// app.listen(process.env.PORT || PORT, () => {
//   console.log(`Now listening on port http://localhost:${PORT}`);
// });
