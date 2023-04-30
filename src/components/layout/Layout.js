import Header from './Header';
import '../adverts/styles.css';

const Layout = ({ title, children, ...rest}) => {
    return (
      <div>        
        <main>
          <h2>{title}</h2>
          {children}
        </main>
        <Header {...rest} />
      </div>
    );
  };
  
  export default Layout; 

export default Layout;
