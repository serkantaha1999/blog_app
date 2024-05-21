import React, {FC, HTMLInputTypeAttribute} from 'react';

interface Props {
    type?: HTMLInputTypeAttribute
    value?: string
    placeholder?: string
    // onChange: (value: string) => void
}

const Input: FC<Props> = ({value, placeholder, type= "text"}) => {
    return (
        <input type={type} className={"input"} placeholder={placeholder}/>
    );
};

export default Input;