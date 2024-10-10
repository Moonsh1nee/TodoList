import mongoose from 'mongoose';

const ListModel = mongoose.Schema({
        nameList: {
            type: String,
            required: true,
        },
        activeList: {
            type: Boolean,
            default: true,
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
    },
    {
        timestamps: {createdAt: 'created_at', updatedAt: 'updated_at'}
    });

export default mongoose.model('List', ListModel);
