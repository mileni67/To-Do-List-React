import { useDispatch } from "react-redux"
import { fetchExampleTasks } from "../../tasksSlice"
import { StyledButton, Button } from "./styled";

const ExampleTasksButton = () => {

    const dispatch = useDispatch();

    return (
        <StyledButton>
            <Button onClick={() => dispatch(fetchExampleTasks())}>
                Add example task
            </Button>
        </StyledButton>
    )
};

export default ExampleTasksButton;

