import { useReducer } from 'react';
import  React  from 'react';

const initialTodos = [
    {
        id: 1,
        text: "Kill Kennedy",
        completed: true,
        author: "Albert",
        due: "15 / 5 / 2023"
    }
]


function reducer(state, action) {
    switch (action.type) {
        case "add": {
            
            return [
                ...state,
                {
                    id: Date.now(),
                    text: "",
                    due: "",
                    completed: false
                }
            ]
        }
        case "delete": {
            return state.filter((item) => item.id !== action.payload);
        }
        case "update": {
            const {id, field, value } = action.payload;
            
            return state.map((item) => {
                if (item.id === id) {
                    return {
                        ...item,
                        [field]: value
                    };
                }
                return item;
            });
        }
        case "completed": {
            return state.map((item) => {
                if (item.id === action.payload) {
                    return {
                        ...item,
                        completed: !item.completed
                    };
                }
                return item;
            })
        }
        
        default: {
            return state;
        }
    }
}


function TodoApp() {
    
    const [state, dispatch] = useReducer(reducer, initialTodos);

    const handleUpdate = (id, field, value) => {
        dispatch({type: "update",
                payload: {
                    id,
                    field,
                    value
                }
            });
        };
    return (
        <>
            <h1>To Do App</h1>
            
            <div>
                <button onClick={() => dispatch({type: "add"})}>Create to-do</button>
            </div>
            <br></br>
            <div>
                {state.map((item) => (
                    <React.Fragment key={item.id} >
                        <label>{item.id}</label>
                        {" "}
                        <input type="text" defaultValue={item.text} onChange={(e) => handleUpdate(item.id, "text", e.target.value)}/>
                        {" "}
                        <input type="text" defaultValue={item.author} onChange={(e) => handleUpdate(item.id, "author", e.target.value)}/>
                        {" "}
                        <input type="date" defaultValue={item.due} onChange={(e) => handleUpdate(item.id, "due", e.target.value)}/>
                        {" "}
                        <input type ="checkbox" checked={item.completed} onChange={() => dispatch({type: "completed", payload: item.id})}/>
                        {" "}
                        <button onClick={() => dispatch({type: "delete", payload: item.id})}>Delete task</button>
                        <br></br>
                    </React.Fragment>
                ))}
            </div>
        </>
    )
} 

export default TodoApp;