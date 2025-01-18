import { FC } from 'react';
import TodoList from './components/TodoList';

const TodosPage: FC = () => {
  return (
    <div className='flex flex-col items-center'>
      <h1 className='text-2xl font-bold mt-6 px-4'>Liste de tâches (NextJS, Tailwind CSS)</h1>
      <TodoList />
    </div>
  );
};

export default TodosPage;
