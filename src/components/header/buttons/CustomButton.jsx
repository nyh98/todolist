import React from 'react';

export default function CustomButton({ style, children, clickEvent }) {
  return (
    <button className={style} onClick={clickEvent}>
      {children}
    </button>
  );
}
