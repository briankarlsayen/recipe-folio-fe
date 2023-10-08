import React, { useState } from 'react';
import Input from '../components/Input';
import { Link } from 'react-router-dom';

function RecipeForm() {
  const [inputField, setInputField] = useState({
    title: '',
    userName: '',
    creationMin: 0,
    description: '',
    type: '',
  });

  const updateField = (e) => {
    setInputField({
      ...inputField,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    alert('Successfully Created');
  };

  return (
    <div className='grid min-h-screen place-items-center'>
      <div className='w-11/12 p-12 bg-white sm:w-8/12 md:w-1/2 lg:w-5/12'>
        <h1 className='text-xl font-semibold'>Create new recipe</h1>
        <form className='mt-6' onSubmit={handleSubmit}>
          <div className='flex justify-between gap-3 flex-col'>
            <Input
              label='Title'
              name='title'
              value={inputField.title}
              type='text'
              onChange={updateField}
            />
            <Input
              label='Description'
              name='description'
              value={inputField.description}
              type='text'
              onChange={updateField}
            />
            <Input
              label='Creator Name'
              name='userName'
              value={inputField.userName}
              type='text'
              onChange={updateField}
            />
            <Input
              label='Preparation Minutes'
              name='creationMin'
              value={inputField.creationMin}
              type='number'
              onChange={updateField}
            />
            <Input
              label='Type'
              name='type'
              value={inputField.type}
              type='text'
              onChange={updateField}
            />
          </div>
          <div>
            <Link to='/'>
              <button className='btn btn-secondary mr-2' type='button'>
                Back
              </button>
            </Link>
            <button className='btn btn-primary' type='submit'>
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RecipeForm;
