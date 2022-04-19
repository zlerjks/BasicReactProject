import Age from "./Age";
import Username from "./Username";
import Button from "./Button";

function TheForm (props) {
    function defaultSubmit (e) {
        e.preventDefault();
        const inputname = (e.target[0].value);
        const inputage = (e.target[1].value);
        props.submitHandler(inputname, inputage);
    }
    return (
        <div>
            <form onSubmit={defaultSubmit} >
                <Username />
                <Age />
                <Button />
            </form>
        </div>
    );
}

export default TheForm;