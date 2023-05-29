import { useReducer } from "react";

function options(state, action) {
    switch (action.type) {
        case "changed_name": {
            return {
                name: action.nextName,
                surname: state.surname,
                age: state.age 
            };
        }
        case "changed_surname": {
            return {
                name: state.name,
                surname: action.nextSurname,
                age: state.age
            };
        }
        case "incremented_age": {
            return {
                name: state.name,
                surname: state.surname,
                age: state.age + 1
            };
        }
        case "decremented_age": {
            return {
                name: state.name,
                surname: state.surname,
                age: state.age - 1
            };
        }

        default : {
            throw Error("Unknown action: " + action.type);
        }
    }

}

const initialPerson = { name: "John", surname: "Doe", age: 28};

function Welcome() {

    const [person, trigger] = useReducer(options, initialPerson);

    return (
    <>
        <div style={{backgroundColor: "orange"}}>
            <h1>Hello!!</h1>
            <p>This is me</p>
            <div style={{backgroundColor: "teal", margin: "30px", padding: "20px"}}>
                <h5> And you are:</h5>
                <label>Name :      </label>
                <input
                    value={person.name}
                    onChange={(e) =>
                        trigger({
                            type: "changed_name",
                            nextName: e.target.value
                        })
                    } />

                <span>{"   |  "}</span>
                <label>Surname:  </label>
                <input
                    value={person.surname}
                    onChange={(e) =>
                        trigger({
                            type: "changed_surname",
                            nextSurname: e.target.value
                        })
                    } />
                <br></br>
                <label>Age :</label>
                <input
                    value={person.age}
                />
                <button style={{borderRadius: "5px", backgroundColor: "lightblue"}} onClick={() => trigger({type: "incremented_age"})}>
                    Increment Age
                </button>
                <button style={{borderRadius: "5px", backgroundColor: "black", color: "white"}} onClick={() => trigger({type: "decremented_age"})}>
                    Decrement Age
                </button>
            </div>
            <div>
                <h4>You say you are:</h4>
                <p style={{backgroundColor: "lightGray", padding: "50px"}}>{person.name} {person.surname}, {person.age} years old. </p>
            </div>

        </div>
    </>
    )
};

export default Welcome;
