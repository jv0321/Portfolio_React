import { NavLink } from 'react-router-dom';

function Header(props) {
  const toggleDarkMode = () => {
    props.setDarkMode((oldValue) => !oldValue);
  };

  return (
    <header className="head navbar-custom sticky-top">
      <div className="container d-flex justify-content-between align-items-center py-2">
        <nav className="d-flex justify-content-center flex-grow-1"> 
          <NavLink className="me-4 nav-link-custom" to="/">
            Home
          </NavLink>
          <NavLink className="me-4 nav-link-custom" to="/about">
            About
          </NavLink>
          <NavLink className="me-4 nav-link-custom" to="/portfolio">
            Portfolio
          </NavLink>
          <NavLink className="me-4 nav-link-custom" to="/contact">
            Contact
          </NavLink>
        </nav>
        <button className="btn-custom" onClick={toggleDarkMode}>
          Dark Mode
        </button>
      </div>
    </header>
  );
}

export default Header;