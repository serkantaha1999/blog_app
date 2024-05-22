import React from 'react';
import Label from '../../shared/components/Label/Label';
import Input from '../../shared/components/Input/Input';
import {emailValidator, passwordValidator} from '../../shared/utils/validationRules';
import {useForm} from 'react-hook-form';
import Button from '../../shared/components/Button/Button';
import {useAuth} from '../../shared/context/AuthContext';

export interface LoginForm {
  email: string;
  password: string;
}

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<LoginForm>();
  const {login} = useAuth()
  return (
    <div
      onSubmit={handleSubmit(login)}
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
