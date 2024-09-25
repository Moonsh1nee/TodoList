import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTasks} from "../redux/slices/tasks";
import { List } from "../components/List/index.jsx";
import { SideMenu } from "../components/SideMenu.jsx";

export const Home = () => {
    const dispatch = useDispatch();
    const {tasks} = useSelector(state => state.tasks);
    
    React.useEffect(() => {
        dispatch(fetchTasks());
    }, [])

    console.log(tasks);

    return (
        <>
            <SideMenu />
            <main className="main">
                {
                    [...Array(10)].map((obj, index) => {
                        return <List key={index} />
                    })
                }
            </main>
        </>
    )
};