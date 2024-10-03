import React from "react"
import {Task} from "../Task/index"
import SkeletonList from "./Skeleton"
import SkeletonTask from "../Task/SkeleronTask"
import {useSelector} from "react-redux"
import {AddTask} from "../Task/AddTask";

export const List = ({
                         _id,
                         nameList,
                         isLoadingList,
                         isLoadingTask
                     }) => {
    const tasks = useSelector(state => state.tasks);


    if (isLoadingList) {
        return (
            <div className="list-tasks">
                <SkeletonList/>
            </div>
        )
    }

    return (
        <div className="list-tasks">
            <h3 className="list-tasks__title">{nameList}</h3>
            <AddTask _id={_id}/>
            <button type="submit" className="btn btn--add-task">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className="icon icon--add-task-v2">
                    <path
                        d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q65 0 123 19t107 53l-58 59q-38-24-81-37.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160q32 0 62-6t58-17l60 61q-41 20-86 31t-94 11Zm280-80v-120H640v-80h120v-120h80v120h120v80H840v120h-80ZM424-296 254-466l56-56 114 114 400-401 56 56-456 457Z"/>
                </svg>
                <span>Add task</span>
            </button>
            <ul>
                {
                    isLoadingTask
                        ? [...Array(10)].map((obj, index) => <SkeletonTask key={index}/>)
                        : tasks.items.map((obj, index) => (obj.list === _id
                            ? (<Task
                                key={obj._id}
                                _id={obj._id}
                                nameTask={obj.nameTask}
                                dateTask={obj.dateTask}
                                checkedTask={obj.checkedTask}
                            />)
                            : '')
                        )
                }
            </ul>
        </div>
    )
}