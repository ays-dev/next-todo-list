'use client';

import React, { FC } from 'react';

type TodoRemoveAllProps = {
  removeAll: () => void;
};

const TodoRemoveAll: FC<TodoRemoveAllProps> = ({ removeAll }) => {
  return (
    <button
      onClick={removeAll}
      className='bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded w-full font-bold select-none'
    >
      Tout supprimer
    </button>
  );
};

export default TodoRemoveAll;
