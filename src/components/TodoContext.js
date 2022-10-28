import { createContext, useState } from "react";

// Init value
export const TodoContext = createContext({
    tasks: [], //state
    setTasks: () => { },
});

const initTasks = [
    {
        id: 1, name: "Học props, state",
        deadline: '2022-10-8', isCompleted: true
    },
    {
        id: 2, name: "Học React Hooks",
        deadline: '2022-10-18', isCompleted: false
    }
];

export const TodoContextProvider = ({ children }) => {
    const [tasks, setTasks] = useState(initTasks);
    return (
        <TodoContext.Provider value={{
            tasks, setTasks
        }}>
            {children}
        </TodoContext.Provider>
    )
}