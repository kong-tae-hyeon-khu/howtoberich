const express = require("express");
const User = require("../../models/User.js");

const router = express.Router();

router.post("/", async (req, res) => {
  const { id, password } = req.body;
  try {
    let user = await User.findOne({ id: id, password: password });
    if (user) {
      res.send("Login Success");
      return;
    }
    res.send({
      errors: [{ Message: "Can't Find User, Please Check ID and Password" }],
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
