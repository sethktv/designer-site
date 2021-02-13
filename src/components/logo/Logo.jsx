import { NavLink } from 'react-router-dom'
import logo from '../../images/logo/logo.png'

const Logo = () => {
    return (
        <div className='logo'>
            <NavLink to='/interiors'>
            <img alt='error' src={logo} />
            </NavLink>
        </div> 
    )
}

export default Logo