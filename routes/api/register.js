const express = require("express");
const User = require("../../models/User");

const router = express.Router(); // Manage register request at /api/register

router.post("/", async (req, res) => {
  const { name, id, password } = req.body;
  try {
    let user = await User.findOne({ id });
    if (user) {
      return res
        .status(400)
        .json({ erros: [{ message: "User ID already exists" }] });
    }

    user = new User({
      name,
      id,
      password,
    });

    await user.save(); // Save on MongoDB
    res.send("Success");
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
