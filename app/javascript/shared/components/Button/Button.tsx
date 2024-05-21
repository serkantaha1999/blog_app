import React, {FC, ReactNode} from 'react';

interface Props {
    children: ReactNode
}

const Button: FC<Props> = ({children}) => {
    return <button className={'submit-button'}>{children}</button>;
};

export default Button;