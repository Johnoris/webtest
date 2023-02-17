import IAppProvider, { IAppContext } from "interface/context/appContext";
import React, { createContext, useState } from "react";

export const AppContext = createContext<IAppContext | undefined>(undefined)

const AppProvider = ({children}: IAppProvider) => {
    const [ auth, setAuth ] = useState<string>('');
    const allowedUser = {
        username: 'dummyUser',
        password: 'password'
    }
    return(
        <AppContext.Provider value={{ auth, setAuth, allowedUser }}>
            {children}
        </AppContext.Provider>
    )
}
export default AppProvider;