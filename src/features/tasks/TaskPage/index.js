import Section from "../../../common/Section";
import Header from "../../../common/Header";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getTaskById } from "../tasksSlice";

function TaskPage() {
    const { id } = useParams();
    const task = useSelector(state => getTaskById(state, id));

    return (
        <>
            <Header title="Task details" />
            <Section
                title={task ? task.content : "Sorry, no found this task 😐"}
                body={!!task && (
                    <>
                        <strong>Done:</strong> {task.done ? "YES" : "NO"}
                    </>
                )}
            />
        </>
    );
}

export default TaskPage;