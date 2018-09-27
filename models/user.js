const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: [true, 'name field is required']
  },
  age: {
    type: Number,
    required: [true, 'age field is required']
  },
  gender: {
    type: String,
    required: [true, 'gender field is required']
  },
  mobile: {
    type: String,
    required: [true, 'mobile field is required']
  },
  avatar: {
    type: String,
    default: 'https://tse2-mm.cn.bing.net/th?id=OIP.XuF1hbZ-HrSqxhnadWO-1wAAAA&w=143&h=150&c=7&o=5&dpr=2&pid=1.7'
  }
});

const User = mongoose.model('user', UserSchema);

module.exports = User;