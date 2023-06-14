import { selectAreTasksEmpty, selectHideDone, selectIsEveryTaskDone, setAllDone, toggleHideDone } from "../tasksSlice";
import { ButtonList, StyledButton } from "./styled";
import { useSelector, useDispatch } from "react-redux";

const Buttons = () => {
    const areTasksEmpty = useSelector(selectAreTasksEmpty);
    const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
    const hideDone = useSelector(selectHideDone);

    const dispatch = useDispatch();

    return (
        !areTasksEmpty && (
            <ButtonList>
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
            </ButtonList >

        ))
};


export default Buttons;