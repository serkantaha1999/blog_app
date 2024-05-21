import React from 'react';
import Label from "../../shared/components/Label/Label";
import Input from "../../shared/components/Input/Input";
import {useForm} from "react-hook-form";
import Button from "../../shared/components/Button/Button";
import {loginAPI} from "../../app/api/api";

interface LoginForm {
    email: string
    password: string
}

const Login = () => {
    const {register, handleSubmit} = useForm<LoginForm>()
    const onSubmit = async (data: LoginForm) => {
        const userInfo = {
            user: {
                ...data
            }
        }
        try {
            let response = await loginAPI.setLogin(userInfo)
            console.log(response)
        } catch (err) {
            console.log(err);
            alert("Something error!")
        }
    }

    return (
        <div onSubmit={handleSubmit(onSubmit)} className={"page login-page"}>
            <div className="login-page__container">
                <h1 className="login-page__title page-title">Login</h1>
                <form className={"login-page__form"} noValidate>
                    <Label>
                        <Input<LoginForm> name={"email"} register={register} rules={{}} placeholder={"Write your email"}/>
                    </Label>
                    <Label>
                        <Input<LoginForm> name={"password"} type={"password"} register={register} rules={{}} placeholder={"Write your password"}/>
                    </Label>
                    <Button>Login</Button>
                </form>
            </div>
        </div>
    );
};

export default Login;