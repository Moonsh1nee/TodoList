export const Task = () => {
    const check = true;
    return (
        <div className="task__wrapper">
            <div className="menu__checkbox">
                <input type="checkbox" name="#" />
                {check ? (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className="icon icon--task-done">
                        <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/>
                    </svg>
                ): (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className="icon icon--circle">
                        <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/>
                    </svg>
                )}
            </div>
            <span>Task 1</span>
        </div>
    )
}