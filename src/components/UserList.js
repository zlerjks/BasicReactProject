import Card from "./Card";

function UserList (props) {
    return (
        <Card>
            <p>{props.enteredname} {props.enteredage}</p>
        </Card>
    )
}

export default UserList;