'use client';

import React, { useState, useContext, FC } from 'react';
import { TodoContext } from '../../context/TodoContext';
import TodoSearchOrCreate from './TodoSearchOrCreate';
import TodoListItem from './TodoListItem';
import TodoRemoveAll from './TodoRemoveAll';

const TodoList: FC = () => {
  const todoContext = useContext(TodoContext);
  if (!todoContext) {
    throw new Error('TodoContext is missing. Please wrap TodoList with TodoProvider.');
  }

  const { todos, addTodo, toggleDone, removeAll } = todoContext;
  const [inputValue, setInputValue] = useState('');

  const handleAddTodo = () => {
    if (inputValue.trim() !== '') {
      addTodo(inputValue.trim());
      setInputValue('');
    }
  };

  const filteredTodos = todos.filter((todo) =>
    todo.title.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    <div className='mt-8 w-full max-w-md mx-auto px-4 mb-12'>
      <TodoSearchOrCreate
        inputValue={inputValue}
        onInputChange={setInputValue}
        onAddTodo={handleAddTodo}
      />
      <ul className='space-y-2 mb-14'>
        {!filteredTodos.length && inputValue
        ? <li className='italic flex items-center justify-between p-2'>
          Aucun résultat, appuyer sur entrée pour ajouter la tâche
        </li>
        : filteredTodos.map((todo) => (
          <TodoListItem
            key={todo.id}
            id={todo.id}
            title={todo.title}
            isDone={todo.isDone}
            toggleDone={toggleDone}
          />
        ))}
      </ul>
      {filteredTodos.length && todos.length
        ? <TodoRemoveAll removeAll={removeAll} />
        : undefined
      }
    </div>
  );
};

export default TodoList;
