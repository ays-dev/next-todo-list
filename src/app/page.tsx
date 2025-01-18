import { redirect } from 'next/navigation';
import { FC } from 'react';

const Home: FC = () => {
  redirect('/todos');
  return null;
};

export default Home;
