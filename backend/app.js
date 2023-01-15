const express = require("express");
const cors = require('cors')
require("dotenv").config();

const app = express();

app.use(cors())
app.use(express.json());

const routes = require("./routes");

app.use(routes);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`Server up and running on port ${PORT}`));
