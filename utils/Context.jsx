import { createContext, useContext, useState } from "react";

export const Context = createContext()

export const CreateUserContext = ({children}) => {

    const [reportLoad, setReportLoad] = useState(false)

    <Context.Provider>
        {children}
    </Context.Provider>
}

export const ContextUser = () => {
    const context = useContext(Context)
    return context;
}