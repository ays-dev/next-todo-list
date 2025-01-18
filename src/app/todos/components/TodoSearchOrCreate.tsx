'use client';

import React, { FC, KeyboardEvent } from 'react';

type TodoSearchOrCreateProps = {
  inputValue: string;
  onInputChange: (value: string) => void;
  onAddTodo: () => void;
};

const TodoSearchOrCreate: FC<TodoSearchOrCreateProps> = ({ inputValue, onInputChange, onAddTodo }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onInputChange(event.target.value);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && inputValue.trim() !== '') {
      onAddTodo();
    }
  };

  return (
    <div className='flex gap-2 mb-4'>
      <input
        className='flex-grow p-2 border rounded focus:outline-none'
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder='Rechercher ou créer une tâche...'
      />
      <div className='relative group'>
        <button
          onClick={onAddTodo}
          aria-label='Ajouter une tâche'
          className='bg-blue-500 hover:bg-blue-600 text-white px-4 font-bold rounded select-none h-full'
        >
          +
        </button>
        <span className='
            absolute
            bottom-full
            left-1/2
            transform
            -translate-x-1/2
            mb-2
            px-2
            py-1
            bg-gray-100
            text-sm
            rounded
            opacity-0
            transition-opacity
            duration-300
            border
            border-gray-300
            pointer-events-none
            group-hover:opacity-100
            group-focus:opacity-100
          '
        >
          Ajouter
        </span>
      </div>
    </div>
  );
};

export default TodoSearchOrCreate;
