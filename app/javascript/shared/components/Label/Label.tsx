import React, {FC, ReactNode} from 'react';

interface Props {
    name?: string
    children: ReactNode
}

const Label: FC<Props> = ({children, name}) => {
  return (
    <label className={'label'}>
      {name && <span className={'label__name'}>{name}</span>}
      {children}
    </label>
  );
};

export default Label;