import React from 'react';

function Input({ label, name, value, type, placeholder, onChange }) {
  return (
    <div className='mb-4'>
      <label className='block text-gray-700 text-sm font-bold mb-2'>
        {label}
      </label>
      <input
        name={name}
        type={type}
        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default Input;
