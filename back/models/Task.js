import mongoose from 'mongoose';

const TaskModel = mongoose.Schema({
        nameTask: {
            type: String,
            required: true,
        },
        dateTask: {
            type: String,
            default: '',
        },
        checkedTask: {
            type: Boolean,
            default: false,
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        list: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'List',
            required: true,
        }
    },
    {
        timestamps: {createdAt: 'created_at', updatedAt: 'updated_at'}
    });

export default mongoose.model('Task', TaskModel);
