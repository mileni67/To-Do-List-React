import "./style.css";

const Form = () => (
    <form className="form">
        <input type="text" className="form__field" placeholder="Co jest do zrobenia?" />
        <button type="submit" className="form__button">Dodaj zadanie</button>
    </form>
)

export default Form;