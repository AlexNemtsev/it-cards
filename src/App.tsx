import { Input } from './components/ui/Input';

export const App = () => {
  return (
    <div style={{ margin: 100 }}>
      <Input
        error="Error!"
        label="Input"
        placeholder="Input search"
        type="password"
        value="Error"
      />
    </div>
  );
};
