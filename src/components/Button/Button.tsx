import React from 'react';
import style from './Button.module.scss';

interface Props {
  children: string | number;
  selected: boolean;
  onClick(): void;
  // onClick: () => void;
}

const Button = ({ children, selected, onClick }: Props) => {
  return (
    <span className={selected ? style.selected : style.notSelected} onClick={onClick}>
      {children}
    </span>
  );
};

export default Button;
