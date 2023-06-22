import { useSelector, useDispatch } from "react-redux";
import { ButtonList, StyledButton } from "./styled";
import {
    selectAreTasksEmpty,
    selectHideDone,
    selectIsEveryTaskDone,
    setAllDone,
    toggleHideDone,
    fetchExampleTasks
} from "../../tasksSlice";

const Buttons = () => {
    const areTasksEmpty = useSelector(selectAreTasksEmpty);
    const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
    const hideDone = useSelector(selectHideDone);

    const dispatch = useDispatch();

    return (
        <ButtonList>
            <StyledButton onClick={() => dispatch(fetchExampleTasks())}>
                Pobierz przykladowe zadanie
            </StyledButton>
            {
                !areTasksEmpty && (

                    <>
                        <StyledButton onClick={() => dispatch(toggleHideDone())}
                        >
                            {hideDone ? "Pokaż" : "Ukryj"} ukończone
                        </StyledButton>
                        <StyledButton
                            onClick={() => dispatch(setAllDone())}
                            disabled={isEveryTaskDone}
                        >
                            Ukończ wszystkie
                        </StyledButton>

                    </>
                )
            }
        </ButtonList >

    );
}



export default Buttons;