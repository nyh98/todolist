import React from 'react';

export default function CustomButton({ style, text }) {
  return <button className={style}>{text}</button>;
}
