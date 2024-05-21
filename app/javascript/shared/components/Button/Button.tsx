import React, {FC, ReactNode} from 'react';

interface Props {
  onClick?: () => void;
  children: ReactNode;
}

const Button: FC<Props> = ({children, onClick}) => {
  return (
    <button
      onClick={onClick}
      type={'submit'}
      className={'submit-button'}
    >
      {children}
    </button>
  );
};

export default Button;
