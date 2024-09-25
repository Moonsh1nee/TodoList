import UserModel from '../models/User.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const register = async (req, res) => {
  try {
    const password = req.body.password;
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const doc = new UserModel({
      nickName: req.body.nickName,
      fullName: req.body.fullName,
      email: req.body.email,
      passwordHash: hash,
      avatarUrl: req.body.avatarUrl,
      time: req.body.time,
    });

    const user = await doc.save();

    const token = jwt.sign(
      {
        _id: user._id,
      },
      'secret123key456pro789',
      {
        expiresIn: '30d',
      },
    );

    const { passwordHash, ...userData } = user._doc;

    res.json({
      ...userData,
      token,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: 'Error during registration!',
    });
  }
};

export const login = async (req, res) => {
  try {
    const emailExec = await UserModel.findOne({ email: req.body.email });
    const nickNameExec = await UserModel.findOne({ nickName: req.body.nickName });
    const userVariants = {
      emailExec,
      nickNameExec
    };

    if (!userVariants.emailExec && !userVariants.nickNameExec) {
      return res.status(404).json({
        message: 'User Not Found',
      });
    }

    const user = userVariants.emailExec || userVariants.nickNameExec;
    
    const isValidPass = await bcrypt.compare(req.body.password, user._doc.passwordHash);

    if (!isValidPass) {
      return res.status(404).json({
        message: 'False login or password',
      });
    }

    const token = jwt.sign(
      {
        _id: user._id,
      },
      'secret123key456pro789',
      {
        expiresIn: '30d',
      },
    );

    const { passwordHash, ...userData } = user._doc;

    res.json({
      ...userData,
      token,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: 'Error while auth user',
    });
  }
};

export const getMe = async (req, res) => {
  try {
    const user = await UserModel.findById(req.userId);

    if (!user) {
      return res.status(404).json({
        message: 'User Not Found',
      });
    }
    const { passwordHash, ...userData } = user._doc;

    res.json({ userData });
  } catch (err) {
    res.status(500).json({
      message: 'Not access',
    });
  }
};
