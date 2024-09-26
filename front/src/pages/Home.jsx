import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { List } from "../components/List/index.jsx";
import { SideMenu } from "../components/SideMenu.jsx";
import { fetchLists } from "../redux/slices/lists.js";
import { fetchTasks } from "../redux/slices/tasks.js";

export const Home = () => {
    const dispatch = useDispatch();
    const lists = useSelector(state => state.lists);
    const tasks = useSelector(state => state.tasks)

    const isListsLoading = lists.status === 'loading';
    const isTasksLoading = tasks.state === 'loading';

    React.useEffect(() => {
        dispatch(fetchLists());
        dispatch(fetchTasks())
    }, []);

    return (
        <>
            <SideMenu />
            <main className="main">
                {
                    isListsLoading
                    ? [...Array(10)].map((obj, index) => ((<List 
                        key={index} 
                        isLoadingList={true}
                        />)))
                    : lists.items.map((obj, index) => (
                        <List 
                            key={index}
                            _id={obj._id}
                            nameList={obj.nameList}
                            isLoadingList={false}
                            isLoadingTask={isTasksLoading}
                        />
                    ))
                }
            </main>
        </>
    )
};