const mongoose = require("mongoose");

// 유저 정보 -> 이름, 아이디 , 비밀번호
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

module.exports = User = mongoose.model("user", UserSchema);
