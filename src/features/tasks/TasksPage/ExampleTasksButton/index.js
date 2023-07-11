import { useDispatch, useSelector } from "react-redux"
import { fetchExampleTasks, setLoading } from "../../tasksSlice"
import { StyledButton, Button } from "./styled";

const ExampleTasksButton = () => {

    const dispatch = useDispatch();
    const isLoading = useSelector((state) => state.tasks.isLoading);

    const exampleClick = () => {
        dispatch(setLoading(false));
        setTimeout(() => {
            dispatch(fetchExampleTasks());
            dispatch(setLoading(true));
        }, 1000)
    }

    return (
        <StyledButton>
            <Button
                onClick={exampleClick}
                disabled={isLoading}
            >
                {isLoading
                    ? "Loading..."
                    : "Add example task"}
            </Button>
        </StyledButton>
    )
};

export default ExampleTasksButton;

