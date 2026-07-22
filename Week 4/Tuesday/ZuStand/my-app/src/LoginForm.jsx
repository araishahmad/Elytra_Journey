import { useState } from 'react';
import useAppStore from './useAppStore';

function LoginForm() {
  const [name, setName] = useState('');
  const login = useAppStore((state) => state.login);
  const addNotification = useAppStore((state) => state.addNotification);

  const handleLogin = () => {
    login({ name });
    addNotification(`Welcome, ${name}!`);
    setName('');
  };

  return (
    <div className="login-form">
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default LoginForm;