import "./style.css"

const Buttons = ({ tasks, hideDone, toggleHideDone }) => 
        tasks.length > 0 && (
            <div className="container__buttons">
                <>
                    <button onClick={toggleHideDone}
                        className="containerButtons__button">
                        {hideDone ? "Pokaż" : "Ukryj"} ukończone
                    </button>
                    <button
                        className="containerButtons__button"
                        disabled={tasks.every(({ done }) => done)}

                    >
                        Ukończ wszystkie
                    </button>

                </>
            </div >

        );


        export default Buttons;