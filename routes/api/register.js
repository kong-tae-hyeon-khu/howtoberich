const express = require("express");
const User = require("../../models/User");

const router = express.Router(); // Manage register request at /api/register
/**
 * @swagger
 * paths:
 *  /api/register:
 *   post:
 *    tags:
 *    - user
 *    description: 유저 등록(회원가입)
 *    parameters:
 *    - in: body
 *      name: body
 *      required: true
 *
 *      schema:
 *       properties:
 *        name :
 *         type: string
 *        id:
 *         type: string
 *        password:
 *         type: string
 *
 *    responses:
 *     200:
 *      description: 회원가입 완료.
 *      schema:
 *       properties:
 *        message:
 *         type: string
 *     401:
 *      description: 아이디 중복
 *      schema:
 *       properties:
 *        message:
 *         type: string
 *     500:
 *      description: 서버 에러.
 *
 *
 */
router.post("/", async (req, res) => {
  const { name, id, password } = req.body;
  try {
    let user = await User.findOne({ id });
    if (user) {
      return res
        .status(401)
        .json({ erros: [{ message: "User ID already exists" }] });
    }

    user = new User({
      name,
      id,
      password,
    });

    await user.save(); // Save on MongoDB
    return res.status(200).json({ message: "Register Success" });
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
