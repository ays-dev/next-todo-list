'use client';

import React, { createContext, useState, useEffect } from 'react';

type Todo = {
  id: string;
  title: string;
  isDone: boolean;
};

type TodoContextValue = {
  todos: Todo[];
  addTodo: (title: string) => void;
  toggleDone: (id: string) => void;
  removeAll: () => void;
};

export const TodoContext = createContext<TodoContextValue | undefined>(undefined);

export const TodoProvider = ({ children }: { children: React.ReactNode }) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem('myTodos');
    if (stored) {
      setTodos(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('myTodos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (title: string) => {
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      title,
      isDone: false,
    };
    setTodos((previousTodos) => [...previousTodos, newTodo]);
  }

  const toggleDone = (id: string) => {
    setTodos((previousTodos) =>
      previousTodos.map(
        (todo) => (
          todo.id === id
            ? { ...todo, isDone: !todo.isDone }
            : todo
        )
      )
    );
  }

  const removeAll = () => {
    setTodos([]);
  }

  const value: TodoContextValue = {
    todos,
    addTodo,
    toggleDone,
    removeAll,
  };

  return <TodoContext value={value}>{children}</TodoContext>;
}
