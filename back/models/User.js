import mongoose from 'mongoose';

const UserModel = new mongoose.Schema({
  nickName: {
    type: String,
    required: true,
    unique: true,
  },
  fullName: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  passwordHash: {
    type: String,
    required: true,
  },
  time: {
    type: Date,
    default: Date.now,
  },
  avatarUrl: String,
});

export default mongoose.model('User', UserModel);
