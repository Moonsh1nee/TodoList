import ListModel from '../models/List.js';
import TaskModel from '../models/Task.js';

export const createTask = async (req, res) => {
    try {
        const list = await ListModel.findById(req.body.list);

        if (list) {
            const doc = new TaskModel({
                nameTask: req.body.nameTask,
                dateTask: req.body.dateTask,
                checkedTask: req.body.checkedTask,
                user: req.userId,
                list: list._id,
            });

            const task = await doc.save();
            res.json(task);
        } else {
            res.status(500).json({
                message: 'Error',
            });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: 'Failed to create task',
        });
    }
};

export const getAll = async (req, res) => {
    try {
        const tasks = await TaskModel.find({user: req.userId});

        res.json(tasks);
    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: 'Failed get all tasks',
        });
    }
};

export const getOne = async (req, res) => {
    try {
        const taskId = req.params.id;

        const task = await TaskModel.find({user: req.userId, _id: taskId});
        res.json(task);
    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: 'Failed get this task',
        });
    }
};

export const remove = async (req, res) => {
    try {
        const taskId = req.params.id;

        const task = await TaskModel.findByIdAndDelete({_id: taskId});
        if (task) {
            return res.json({
                status: 'success',
            });
        } else {
            return res.status(404).json({
                message: 'Not found task',
            });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: 'Failed remove task',
        });
    }
};

export const update = async (req, res) => {
    try {
        const taskId = req.params.id;

        const task = await TaskModel.findByIdAndUpdate(
            {
                _id: taskId,
            },
            {
                nameTask: req.body.nameTask,
                dateTask: req.body.dateTask,
                checkedTask: req.body.checkedTask,
                user: req.userId,
            },
            {
                new: true
            }
        );
        if (task) {
            return res.json(task);
        } else {
            return res.status(404).json({
                message: 'Not found task',
            });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: 'Failed update task',
        });
    }
};
