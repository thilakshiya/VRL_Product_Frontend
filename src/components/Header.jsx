const Header = ({ username }) => {
  return (
    <div className="header">
      <h2>Welcome Back, {username} 👋</h2>
      <p>Your dashboard overview is shown here.</p>
    </div>
  );
};

export default Header;

