import React, {useState} from "react";
import {loginAPI} from "../../app/api/api";

export const useAuth = () => {
    const [isAuth, setIsAuth] = useState(false);
    React.useEffect(() => {
        async function fetchCheckAuth() {
            try {
                let response = await loginAPI.checkAuth();
                if (response.status === 200) {
                    setIsAuth(true)
                }
            } catch (err) {
                alert("Something error!Please try again")
                console.log(err)
            }
        }
        fetchCheckAuth()
    }, [])
    return {isAuth, setIsAuth}
}