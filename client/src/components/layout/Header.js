import { React, useRef} from 'react'
import PropTypes from 'prop-types'
import { NavLink, Link } from 'react-router-dom'
import { connect, useSelector } from 'react-redux'
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';

// Import logout action
import { logout } from '../../actions/authActions';

// Might make small text lighter
// Need to add active page indicator (red bar under current page nav-item)

const Header = ({ logout }) => {
  // Get the state
  const state = useSelector(state => state);
  // Get the auth state
  const isAuthenticated = state.auth.isAuthenticated;

  // Set the sign in/out link
  var signInOut;
  
  // If user is authenticated, show logout link, else show sign in link
  if(isAuthenticated){
    signInOut = <NavLink onClick={logout} className="nav-thing" to="/">Logout</NavLink>
  } else {
    signInOut = <NavLink className="nav-thing" to="/login">Sign In</NavLink>
  }

  const setDarkMode = () => {
    document.querySelector('body').setAttribute('data-theme', 'dark')
    localStorage.setItem('theme', 'dark')
  }

  const setLightMode = () => {
    document.querySelector('body').setAttribute('data-theme', 'light')
    localStorage.setItem('theme', 'light')
  }

  const theme = localStorage.getItem('theme')

  if(theme === 'dark'){
    setDarkMode()
  } else {
    setLightMode()
  }

  const toggleTheme = (e) => {
    if(e.target.checked){
      setDarkMode()
    } else {
      setLightMode()
    }
  }

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className='m-0 p-0 border-dark border-opacity-10 rounded-bottom-4 overflow-hidden' id='header'>
        <Container className='p-0 m-0'>
          <div className='d-flex bobs-garage' style={{width: '200px', height: '125px'}}>
            <Navbar.Brand href="/home" className='p-0 align-items-center my-auto mx-auto'><h2 className='my-0 mx-2 text-center bobs-garage'>Bob's Garage</h2></Navbar.Brand>
          </div>
          
          <Navbar.Toggle className='me-4' aria-controls="responsive-navbar-nav" style={{width: '75px', height: '75px'}} />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="d-flex justify-content-between text-center mx-4 w-100 fs-4">
              <NavLink className="nav-thing hover-border" activeClassName="active"  to="/home">Home</NavLink>
              <NavLink className="nav-thing hover-border" activeClassName="active"  to="/services">Services</NavLink>
              <NavLink className="nav-thing hover-border" activeClassName="active"  to="/about">About</NavLink>
              <NavLink className="nav-thing hover-border" activeClassName="active" to="/staff">Staff</NavLink>
              <NavLink className="nav-thing hover-border" activeClassName="active" to="/feedback">Feedback</NavLink>
              <NavLink className="nav-thing hover-border" activeClassName="active" to="/blog">Blog</NavLink>
              {signInOut}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div class="form-check form-switch">
        <input class="form-check-input" type="checkbox" role="switch" onChange={toggleTheme} defaultChecked={theme ==='dark'}id="flexSwitchCheckChecked" />
        <label className='theme-switch' for="flexSwitchCheckChecked">Toggle Light/Dark Mode</label>
      </div>
    </div>
  )
}

Header.propTypes = {
  logout: PropTypes.func.isRequired,
}

// Export component
export default connect(null, { logout })(Header)