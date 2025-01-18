'use client';

import React, { FC } from 'react';

type TodoListItemProps = {
  id: string;
  title: string;
  isDone: boolean;
  toggleDone: (id: string) => void;
};

const TodoListItem: FC<TodoListItemProps> = ({ id, title, isDone, toggleDone }) => {
  return (
    <li>
      <label 
        className='flex items-center justify-between p-2 bg-gray-100 rounded cursor-pointer select-none'
      >
        <span className={isDone ? 'line-through text-gray-600' : 'font-bold'}>
          {title}
        </span>
        <div className='relative flex items-center ml-2'>
          <input
            type='checkbox'
            checked={isDone}
            onChange={() => toggleDone(id)}
            aria-label={`Marquer la tâche '${title}' comme terminée`}
            className='peer absolute w-6 h-6 opacity-0 cursor-pointer'
          />
          <div
            className='
              w-6
              h-6
              rounded-full
              border
              border-gray-300
              flex
              items-center
              justify-center
              transition-colors
              bg-white
              peer-checked:bg-blue-500
              peer-checked:border-blue-500
            '
          >
            <svg
              className='w-4 h-4 text-white'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              viewBox='0 0 24 24'
            >
              <path d='M5 13l4 4L19 7' />
            </svg>
          </div>
        </div>
      </label>
    </li>
  );
};

export default TodoListItem;
