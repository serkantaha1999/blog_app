import React, {ChangeEvent, HTMLInputTypeAttribute} from 'react';
import {FieldValues, Path, UseFormRegister} from 'react-hook-form';

interface Props<T extends FieldValues> {
  name: Path<T>;
  id?: string;
  register: UseFormRegister<T>;
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
  rules?: FieldValues;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

function Input<T extends FieldValues>({register, placeholder, rules, name, id, onChange, type = 'text'}: Props<T>) {
  return (
    <input
      id={id}
      placeholder={placeholder}
      {...register(name, rules)}
      type={type}
      onChange={onChange}
      className={'input'}
    />
  );
}

export default Input;
