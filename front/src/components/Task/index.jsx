import React from 'react';
import {useDispatch} from "react-redux";
import {fetchDeleteTask, fetchUpdateTask} from "../../redux/slices/tasks";
import Modal from "react-responsive-modal";

export const Task = ({
                         _id,
                         nameTask,
                         dateTask,
                         checkedTask
                     }) => {
    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(false);

    const soldCheckbox = () => {
        const params = {
            _id,
            nameTask,
            checkedTask: !checkedTask,
        }
        dispatch(fetchUpdateTask(params))
    }

    const taskDelete = (id) => {
        dispatch(fetchDeleteTask(id));
    }

    return (
        <>
            <div className="task__wrapper">
                <div className="task__wrapper-left">
                    <div className="menu__checkbox" onClick={soldCheckbox}>
                        <input type="checkbox"/>
                        {checkedTask ? (
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"
                                 className="icon icon--task-done">
                                <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/>
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"
                                 className="icon icon--circle">
                                <path
                                    d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/>
                            </svg>
                        )}
                    </div>
                    <span onClick={() => setOpen(true)}>{nameTask}</span>
                </div>
                <div className="task__wrapper-remove" onClick={() => taskDelete(_id)}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className='icon icon--task-remove'>
                        <path
                            d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/>
                    </svg>
                </div>
            </div>
            <div>
                <Modal open={open} onClose={() => setOpen(false)} center>

                </Modal>
            </div>
        </>
    )
}