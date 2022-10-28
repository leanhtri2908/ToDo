import { createContext, useState } from "react";

// Init value
export const MyContext = createContext({
    username: null, //state
    isLogged: false,
    setIsLogged: () => { },
    setUsername: () => { } //set state
});

export const MyContextProvider = ({ children }) => {
    const [username, setUsername] = useState(null);
    const [isLogged, setIsLogged] = useState(false);
    return (
        <MyContext.Provider value={{
            username,
            setUsername,
            isLogged,
            setIsLogged
        }}>
            {children}
        </MyContext.Provider>
    )
}