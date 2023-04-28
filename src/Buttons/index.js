import "./style.css"

const Buttons = (props) => (
    props.tasks.length > 0 && (
        <div className="container__buttons">
            <button
                className="containerButtons__button">
                {props.hideDone ? "Pokaż" : "Ukryj"} ukończone
            </button>
            <button
                className="containerButtons__button"
                disabled={props.tasks.every(({ done }) => done)}

            >
                Ukończ wszystkie
            </button>
        </div >
    )
);


export default Buttons;