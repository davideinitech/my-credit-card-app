import { createContext, useContext } from "react";

export const AuthContext = createContext({ authenticated: false, setAuthenticated: (authenticated: boolean) => { } })