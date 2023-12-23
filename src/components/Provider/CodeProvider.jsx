import { createContext, useEffect, useState } from "react";
import { useCode } from "../hooks/useCode";

export const CodeContext = createContext()

const CodeProvider = ({children}) => {

    const { code } = useCode()

    const [user, setUser] = useState(false)
    useEffect(() => {
        if (code.auth == true) {
            setUser(true)
        } else if (code.code >= 2) {
            setUser(true)
        } else {
            setUser(false)
        }
    }, [code])

    return (
        <CodeContext.Provider value={{ user }}>
            {children}
        </CodeContext.Provider>
    );
}

export default CodeProvider;