import { ButtonList, StyledButton } from "./styled";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) =>
    tasks.length > 0 && (
        <ButtonList>
            <>
                <StyledButton onClick={toggleHideDone}
                    >
                    {hideDone ? "Pokaż" : "Ukryj"} ukończone
                </StyledButton>
                <StyledButton
                    onClick={setAllDone}
                    disabled={tasks.every(({ done }) => done)}
                >
                    Ukończ wszystkie
                </StyledButton>

            </>
        </ButtonList >

    );


export default Buttons;