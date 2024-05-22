import React, {createContext, FC, ReactNode, useContext, useState} from "react";
import {loginAPI} from "../../app/api/api";
import {LoginForm} from "../../pages/components/Login/LoginPage";
import {useNavigate} from "react-router-dom";
import {ROUTES} from "../../app/router/router-config";

interface AuthContextProps {
    children: ReactNode;
}

interface AuthContextState {
    isAuth: boolean;
    login: (data: LoginForm) => Promise<void>;
    logout: () => Promise<void>;
}

const defaultAuthContextState: AuthContextState = {
    isAuth: false,
    login: async () => {},
    logout: async () => {}
};


const AuthContext = createContext<AuthContextState>(defaultAuthContextState);

export const useAuth = () => {
    return useContext(AuthContext);
}

export const AuthProvider: FC<AuthContextProps> = ({children}) => {
    const [isAuth, setIsAuth] = useState(false);
    const navigate = useNavigate()
    React.useEffect(() => {
        async function fetchCheckAuth() {
            try {
                let response = await loginAPI.checkAuth();
                if (response.status === 200) {
                    setIsAuth(true)
                }
            } catch (err) {
                console.log(err)
            }
        }
        fetchCheckAuth()
    }, [])

    const login = async (data: LoginForm) => {
        const userInfo = {
            user: {
                ...data,
            },
        };
        try {
            let response = await loginAPI.login(userInfo);
            if (response.status === 200) {
                setIsAuth(true);
                navigate(ROUTES.adminPanel)
            }
        } catch (err) {
            console.log(err);
        }
    };

    const logout = async () => {
        try {
            let response = await loginAPI.logout()
            if (response.status === 200) {
                setIsAuth(false);
                navigate(ROUTES.layout)
            }
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <AuthContext.Provider value={{isAuth, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}
