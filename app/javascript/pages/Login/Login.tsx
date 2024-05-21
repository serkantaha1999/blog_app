import React, {useState} from 'react';
import Label from '../../shared/components/Label/Label';
import Input from '../../shared/components/Input/Input';
import {emailValidator, passwordValidator} from '../../shared/utils/validationRules';
import {useForm} from 'react-hook-form';
import Button from '../../shared/components/Button/Button';
import {loginAPI} from '../../app/api/api';
import {useNavigate} from 'react-router-dom';
import {ROUTES} from '../../app/router/router-config';
import {useAuth} from '../hooks/useAuth';

interface LoginForm {
  email: string;
  password: string;
}

const Login = () => {
  const navigate = useNavigate();
  const {isAuth, setIsAuth} = useAuth();
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<LoginForm>();
  const onSubmit = async (data: LoginForm) => {
    const userInfo = {
      user: {
        ...data,
      },
    };
    try {
      let response = await loginAPI.login(userInfo);
      if (response.status === 200) {
        setIsAuth(true);
      }
    } catch (err) {
      alert('Something error!Please try again');
      console.log(err);
    }
  };
  if (isAuth) {
    navigate(ROUTES.adminPanel);
  }
  return (
    <div
      onSubmit={handleSubmit(onSubmit)}
      className={'page login-page'}
    >
      <div className="login-page__container">
        <h1 className="login-page__title page-title">Login</h1>
        <form
          className={'login-page__form'}
          noValidate
        >
          <Label errors={errors.email?.message}>
            <Input<LoginForm>
              name={'email'}
              register={register}
              rules={emailValidator}
              placeholder={'Write your email'}
            />
          </Label>
          <Label errors={errors.password?.message}>
            <Input<LoginForm>
              name={'password'}
              type={'password'}
              register={register}
              rules={passwordValidator}
              placeholder={'Write your password'}
            />
          </Label>
          <Button>Login</Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
