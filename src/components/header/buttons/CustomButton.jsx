import React from 'react';

export default function CustomButton({ style, children }) {
  return <button className={style}>{children}</button>;
}
