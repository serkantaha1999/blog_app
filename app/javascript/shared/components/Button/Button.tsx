import React, {FC, ReactNode} from 'react';

interface Props {
  onClick?: () => void;
  theme?: "default" | "delete";
  children: ReactNode;
}

const Button: FC<Props> = ({children, onClick, theme = "default"}) => {
  return (
    <button
      onClick={onClick}
      className={`submit-button submit-button-${theme}`}
    >
      {children}
    </button>
  );
};

export default Button;
