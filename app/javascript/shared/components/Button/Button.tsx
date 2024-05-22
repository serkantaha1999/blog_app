import React, {FC, ReactNode} from 'react';

interface Props {
  onClick?: () => void;
  theme?: "default" | "edit" | "delete" | "add";
  children: ReactNode;
}

const Button: FC<Props> = ({children, onClick, theme = "default"}) => {
  return (
    <button
      onClick={onClick}
      type={'submit'}
      className={`submit-button submit-button-${theme}`}
    >
      {children}
    </button>
  );
};

export default Button;
