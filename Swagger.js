// swagger.js
const swaggerUi = require("swagger-ui-express");
const swaggereJsdoc = require("swagger-jsdoc");

const options = {
  swaggerDefinition: {
    info: {
      title: "API Spec for Project",
      version: "1.0.0",
      description: "API Spec for Project (HowToBeRich)",
    },
    host: "localhost:8000",
    basePath: "/",
  },
  apis: ["./routes/*.js"],
};

const specs = swaggereJsdoc(options);

module.exports = {
  swaggerUi,
  specs,
};
