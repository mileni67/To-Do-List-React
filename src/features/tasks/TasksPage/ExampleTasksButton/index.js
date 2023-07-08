import { useDispatch, useSelector } from "react-redux"
import { fetchExampleTasks, selectExampleTasksLoading } from "../../tasksSlice"
import { StyledButton, Button } from "./styled";

const ExampleTasksButton = () => {

    const dispatch = useDispatch();
    const loading = useSelector(selectExampleTasksLoading);

    return (
        <StyledButton>
            <Button
                onClick={() => dispatch(fetchExampleTasks())}
                disabled={loading}
            >
                {loading
                    ? "Loading..."
                    : "Add example task"}
            </Button>
        </StyledButton>
    )
};

export default ExampleTasksButton;

