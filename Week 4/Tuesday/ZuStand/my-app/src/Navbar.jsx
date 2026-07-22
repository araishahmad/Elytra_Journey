import useAppStore from './useAppStore';

function Navbar() {
  const user = useAppStore((state) => state.user);
  const theme = useAppStore((state) => state.theme);
  const toggleTheme = useAppStore((state) => state.toggleTheme);
  const logout = useAppStore((state) => state.logout);

  return (
    <nav
      className="navbar"
      style={{
        background: theme === 'dark' ? '#222' : '#eee',
        color: theme === 'dark' ? '#fff' : '#000',
      }}
    >
      <span>{user ? `Hi, ${user.name}` : 'Not logged in'}</span>
      <div>
        <button onClick={toggleTheme}>Toggle Theme ({theme})</button>
        {user && <button onClick={logout}>Logout</button>}
      </div>
    </nav>
  );
}

export default Navbar;