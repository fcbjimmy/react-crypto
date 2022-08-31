import React from 'react';
import style from './Button.module.scss';
type Props = {
  children: string | number;
  selected: boolean;
  onClick: () => void;
};

const Button = ({ children, selected, onClick }: Props) => {
  return (
    <span className={selected ? style.selected : style.notSelected} onClick={onClick}>
      {children}
    </span>
  );
};

export default Button;
