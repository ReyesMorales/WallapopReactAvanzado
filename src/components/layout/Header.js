import { logout } from '../auth/service';
import Button from '../shared/Button';

const Header = ({ isLogged, onLogout }) => {
    const handleLogoutClick = async () => {
        await logout();
        onLogout();
    }
  return (
    <header>
      <nav>
        { isLogged ? (
        <Button onClick={handleLogoutClick} variant="primary">Logout</Button>     
        ) : ( 
        <Button variant="secondary">Login</Button>
    )}
      </nav>
    </header>
  );
};

export default Header;