import React, {FC} from 'react';

interface Props {
    placeholder?: string
}

const Textarea: FC<Props> = ({placeholder}) => {
    return (
        <textarea placeholder={placeholder} className={"textarea"}></textarea>
    );
};

export default Textarea;