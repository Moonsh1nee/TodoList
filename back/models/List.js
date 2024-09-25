import mongoose from 'mongoose';

const ListModel = mongoose.Schema({
  nameList: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

export default mongoose.model('List', ListModel);
