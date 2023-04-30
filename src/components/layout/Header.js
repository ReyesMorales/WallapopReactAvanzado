import { logout } from '../auth/service';
import Button from '../shared/Button';
import '../adverts/styles.css';

const Header = ({ isLogged, onLogout }) => {
  const handleLogoutClick = async () => {
    await logout();
    onLogout();
  };
  return (
    <header>
      <nav>
        {isLogged ? (
          <Button
            onClick={handleLogoutClick}
            variant="primary"
            className="logout-button"
          >
            Logout
          </Button>
        ) : (
          <Button variant="secondary" className="login-button">
            Login
          </Button>
        )}
      </nav>
    </header>
  );
};

export default Header;
