import React from 'react';

const Button = ({ title, onClick}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="text-sm py-2 px-6 border"
    >
      {title}
    </button>
  );
};

export default Button;
