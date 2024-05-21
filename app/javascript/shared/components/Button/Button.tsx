import React, {FC, ReactNode} from 'react';

interface Props {
  children: ReactNode;
}

const Button: FC<Props> = ({children}) => {
  return (
    <button
      type={'submit'}
      className={'submit-button'}
    >
      {children}
    </button>
  );
};

export default Button;
