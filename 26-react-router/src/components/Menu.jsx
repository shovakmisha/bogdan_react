import { NavLink } from 'react-router-dom'

function Menu() {
  return (
    <nav>
        <NavLink className={({isActive}) => isActive ? 'activeLink' : 'link'} to="/" end>Go to Home</NavLink>
        <NavLink className={({isActive}) => isActive ? 'activeLink' : 'link'} to="/courses" >Courses</NavLink>
        <NavLink className={({isActive}) => isActive ? 'activeLink' : 'link'} to="/contacts">Go to Contacts</NavLink>
        <NavLink className={({isActive}) => isActive ? 'activeLink' : 'link'} to="/about">Go to About</NavLink>
    </nav> 
    )
}

export default Menu