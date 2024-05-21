import React, {FC, ReactNode} from 'react';
import {cn} from "../../utils/utils";

interface Props {
    name?: string
    children: ReactNode
    errors?: string
}

const Label: FC<Props> = ({children, name, errors}) => {
  return (
    <label className={cn('label', {
        "error": !!errors
    })}>
      {name && <span className={'label__name'}>{name}</span>}
      {children}
        <p className={"label__error"}>{errors}</p>
    </label>
  );
};

export default Label;