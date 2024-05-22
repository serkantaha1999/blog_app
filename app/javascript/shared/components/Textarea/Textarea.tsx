import React from 'react';
import {FieldValues, Path, UseFormRegister} from 'react-hook-form';

interface Props<T extends FieldValues> {
  name: Path<T>;
  id?: string;
  register: UseFormRegister<T>;
  placeholder?: string;
  rules?: FieldValues;
}

function Textarea<T extends FieldValues>({register, placeholder, rules, name, id}: Props<T>) {
  return (
    <textarea
      id={id}
      placeholder={placeholder}
      {...register(name, rules)}
      className={'textarea'}
    ></textarea>
  );
}

export default Textarea;
