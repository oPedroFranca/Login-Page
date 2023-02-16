import React from 'react';
import './style.css';

type ValueButtom = {
  value: string;
};

export const ButtonSubmit = (props: ValueButtom) => {
  return (
    <div className="button-login-line">
      <button type="submit" className="submitButtom">
        {props.value}
      </button>
    </div>
  );
};
