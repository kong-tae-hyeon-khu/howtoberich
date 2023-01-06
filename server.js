const express = require("express");

const PORT = 8000;
const database = require("./mongodb.js");

// Server Open
const app = express();
app.listen(PORT, () => {
  console.log(`Server is Running on port ${PORT}`);
});

// DataBase Connection
database();

// Allow us to get the data in request.body
app.use(express.json({ extended: false }));

// Router API for Register
app.use("/api/register", require("./routes/api/register"));

// Router API for Login
app.use("/api/login", require("./routes/api/login"));

// For Swagger
const { swaggerUi, specs } = require("./Swagger.js");
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
