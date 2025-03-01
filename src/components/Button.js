import React from 'react';

const Button = ({ title, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="bg-white text-blue-600 text-sm py-2 px-6 border border-blue-600 hover:bg-white hover:text-blue-600 transition-all"
    >
      {title}
    </button>
  );
};

export default Button;
