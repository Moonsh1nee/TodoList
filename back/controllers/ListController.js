import ListModel from '../models/List.js';

export const createList = async (req, res) => {
    try {
        const doc = new ListModel({
            nameList: req.body.nameList,
            user: req.userId,
        });

        const list = await doc.save();
        res.json(list);
    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: 'Failed to create list',
        });
    }
};

export const getAllLists = async (req, res) => {
    try {
        const lists = await ListModel.find({user: req.userId});

        res.json(lists);
    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: 'Failed get all lists',
        });
    }
};

export const getOneList = async (req, res) => {
    try {
        const listId = req.params.id;

        const list = await ListModel.find({user: req.userId, _id: listId});
        res.json(list)
    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: 'Failed get this list',
        });
    }
};

export const removeList = async (req, res) => {
    try {
        const listId = req.params.id;

        const list = await ListModel.findByIdAndDelete({_id: listId});
        if (list) {
            return res.json({
                status: 'success',
            });
        } else {
            return res.status(404).json({
                message: 'Not found list',
            });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: 'Failed remove list',
        });
    }
};

export const updateList = async (req, res) => {
    try {
        const listId = req.params.id;

        const list = await ListModel.findByIdAndUpdate(
            {
                _id: listId,
            },
            {
                nameList: req.body.nameList,
                user: req.userId,
            },
            {
                new: true
            }
        );
        if (list) {
            return res.json(list);
        } else {
            return res.status(404).json({
                message: 'Not found list',
            });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: 'Failed update list',
        });
    }
};
