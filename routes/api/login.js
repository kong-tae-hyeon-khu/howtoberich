const express = require("express");
const User = require("../../models/User.js");

const router = express.Router();

/**
 * @swagger
 * paths:
 *  /api/login:
 *   post:
 *    tags:
 *    - user
 *    description: 유저 로그인
 *    parameters:
 *    - in: body
 *      name: body
 *      required: true
 *
 *      schema:
 *       properties:
 *        id:
 *         type: string
 *        password:
 *         type: string
 *
 *    responses:
 *     200:
 *      description: 로그인 성공.
 *      schema:
 *       properties:
 *        Message:
 *         type: string
 *     401:
 *      description: 아이디 또는 비밀번호가 일치하지 않는다.
 *      schema:
 *       properties:
 *        Message:
 *         type: string
 *     500:
 *      description: 서버 에러.
 *
 *
 */
router.post("/", async (req, res) => {
  const { id, password } = req.body;
  try {
    let user = await User.findOne({ id: id, password: password });
    if (user) {
      res.send("Login Success");
      return;
    }
    res.status(401).send({
      errors: [{ Message: "Can't Find User, Please Check ID and Password" }],
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
