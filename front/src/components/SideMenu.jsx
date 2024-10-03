import { useSelector } from "react-redux";
import Modal from "react-responsive-modal";
import React from "react";
import {AddList} from "./List/AddList";

export const SideMenu = () => {
    const lists = useSelector(state => state.lists)
    const isListsLoading = lists.status === 'loading';

    const [open, setOpen] = React.useState(false);

    const check = true;

    return (
        <aside className="side-menu">
            <div className="menu__top">
                <button type="submit" className="btn btn--create-task" onClick={() => setOpen(true)}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className="icon icon--add-task">
                        <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/>
                    </svg>
                    <span>Create</span>
                </button>

                <Modal open={open} onClose={() => setOpen(false)} center>
                    <AddList />
                </Modal>

                <ul className="menu__tasks-variant">
                    <li className="active">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className="icon icon--variant icon--all__task">
                            <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q65 0 123 19t107 53l-58 59q-38-24-81-37.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160q133 0 226.5-93.5T800-480q0-18-2-36t-6-35l65-65q11 32 17 66t6 70q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm-56-216L254-466l56-56 114 114 400-401 56 56-456 457Z"/>
                        </svg>
                        <span>All task</span>
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className="icon icon--variant icon--favorite__task">
                            <path d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z"/>
                        </svg>
                        <span>Favorite</span>
                    </li>
                </ul>
            </div>

            <div className="menu__bottom">
                <div className="menu__bottom-title">
                    <h2>Lists</h2>
                    <button type="submit" className="btn btn--list">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className="icon icon--arrow-top">
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
                                        <input type="checkbox" name="#" />
                                        {check ? (
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className="icon icon--checked">
                                                <path d="m424-312 282-282-56-56-226 226-114-114-56 56 170 170ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z"/>
                                            </svg>
                                        ): (
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className="icon icon--checked">
                                                <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Z"/>
                                            </svg> 
                                        )}
                                    </div>
                                    <span>{obj.nameList}</span>
                                </li>
                            ))
                        )
                    }
                    
                    <li>
                        <button type="submit" className="btn btn--create-list">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className="icon icon--add-list">
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