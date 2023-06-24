import { useSelector, useDispatch } from "react-redux";
import { ButtonList, StyledButton } from "./styled";
import {
    selectAreTasksEmpty,
    selectHideDone,
    selectIsEveryTaskDone,
    setAllDone,
    toggleHideDone,
} from "../../tasksSlice";

const Buttons = () => {
    const areTasksEmpty = useSelector(selectAreTasksEmpty);
    const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
    const hideDone = useSelector(selectHideDone);

    const dispatch = useDispatch();

    return (
        <ButtonList>
            {
                !areTasksEmpty && (

                    <>
                        <StyledButton onClick={() => dispatch(toggleHideDone())}
                        >
                            {hideDone ? "Show" : "Hide"} completed
                        </StyledButton>
                        <StyledButton
                            onClick={() => dispatch(setAllDone())}
                            disabled={isEveryTaskDone}
                        >
                            Finish all
                        </StyledButton>

                    </>
                )
            }
        </ButtonList >

    );
}



export default Buttons;