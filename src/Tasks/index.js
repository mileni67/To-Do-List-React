import "./style.css"


const Tasks = ({ tasks, hideDone }) => (
    <ul classNameName="list">
        {tasks.map((task) => (
            <li
                className={
                    `list__item${task.done && hideDone ?
                        " list__item--hidden" : ""
                    }`}
            >
                <button
                    className=
                    "list__button list__button--done">
                    {task.done ? "✓" : ""}
                </button>
                <span
                    className={
                        `list__itemContent${task.done ?
                        " list__itemContent--done" : ""
                        }`}>
                    {task.content}
                </span>
                <button
                    className=
                    "list__button list__button--remove">
                    🗑
                </button>
            </li>
        ))}
    </ul >
)

export default Tasks;