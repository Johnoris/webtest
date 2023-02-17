export default interface IAppProvider {
    children: React.ReactNode;
}

export interface IAppContext {
    auth: string,
    setAuth: React.Dispatch<React.SetStateAction<string>>,
    allowedUser: {
        username: string,
        password: string,
    },
}