import { LogUpForm } from './components/auth/LogUpForm';

export const App = () => {
  return (
    <div>
      <LogUpForm onSubmit={data => console.log(data)} />
    </div>
  );
};
