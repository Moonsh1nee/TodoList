import {useDispatch, useSelector} from "react-redux";
import Modal from "react-responsive-modal";
import React from "react";
import {AddList} from "./List/AddList";
import {fetchDeleteList} from "../redux/slices/lists";
import {fetchDeleteTask} from "../redux/slices/tasks";
import {EditList} from "./List/EditList";

export const SideMenu = () => {
    const dispatch = useDispatch();
    const lists = useSelector(state => state.lists)
    const tasks = useSelector(state => state.tasks)
    const isListsLoading = lists.status === 'loading';

    const [openCreate, setOpenCreate] = React.useState(false);
    const [openEdit, setOpenEdit] = React.useState(false);

    const check = true;

    const listDelete = (id) => {
        const deleteTaskOfList = tasks.items.filter(task => task.list === id);
        if (deleteTaskOfList) {
            deleteTaskOfList.map(task => {
                dispatch(fetchDeleteTask(task._id))
            })
        }
        dispatch(fetchDeleteList(id))
    }

    return (
        <aside className="side-menu">
            <div className="menu__top">
                <button type="submit" className="btn btn--create-task" onClick={() => setOpenCreate(true)}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className="icon icon--add-task">
                        <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/>
                    </svg>
                    <span>Create</span>
                </button>

                <Modal open={openCreate} onClose={() => setOpenCreate(false)} center classNames={{modal: 'customModal'}}>
                    <AddList/>
                </Modal>

                <ul className="menu__tasks-variant">
                    <li className="active">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"
                             className="icon icon--variant icon--all__task">
                            <path
                                d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q65 0 123 19t107 53l-58 59q-38-24-81-37.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160q133 0 226.5-93.5T800-480q0-18-2-36t-6-35l65-65q11 32 17 66t6 70q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm-56-216L254-466l56-56 114 114 400-401 56 56-456 457Z"/>
                        </svg>
                        <span>All task</span>
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"
                             className="icon icon--variant icon--favorite__task">
                            <path
                                d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z"/>
                        </svg>
                        <span>Favorite</span>
                    </li>
                </ul>
            </div>

            <div className="menu__bottom">
                <div className="menu__bottom-title">
                    <h2>Lists</h2>
                    <button type="submit" className="btn btn--list">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"
                             className="icon icon--arrow-top">
                            <path d="M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z"/>
                        </svg>
                    </button>
                </div>

                <ul>
                    {
                        isListsLoading
                            ? ''
                            : (
                                lists.items.map((obj, index) => (
                                    <li key={index}>
                                        <div className="menu__checkbox">
                                            <input type="checkbox" name="#"/>
                                            {check ? (
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"
                                                     className="icon icon--checked">
                                                    <path
                                                        d="m424-312 282-282-56-56-226 226-114-114-56 56 170 170ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z"/>
                                                </svg>
                                            ) : (
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"
                                                     className="icon icon--checked">
                                                    <path
                                                        d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Z"/>
                                                </svg>
                                            )}
                                        </div>
                                        <span>{obj.nameList}</span>
                                        <div className="list__wrapper-edit" onClick={() => setOpenEdit(true)}>
                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                 viewBox="0 -960 960 960" className='icon icon--list-edit'>
                                                <path
                                                    d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"/>
                                            </svg>
                                        </div>
                                        <Modal open={openEdit} onClose={() => setOpenEdit(false)} center classNames={{modal: 'customModal'}}>
                                            <EditList _id={obj._id}/>
                                        </Modal>
                                        <div className="task__wrapper-remove" onClick={() => listDelete(obj._id)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"
                                                 className='icon icon--task-remove'>
                                                <path
                                                    d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/>
                                            </svg>
                                        </div>
                                    </li>
                                ))
                            )
                    }

                    <li>
                        <button type="submit" className="btn btn--create-list">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"
                                 className="icon icon--add-list">
                                <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/>
                            </svg>
                            <span>Create list</span>
                        </button>
                    </li>
                </ul>
            </div>
        </aside>
    )
}