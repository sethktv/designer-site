import { NavLink } from "react-router-dom"


const Menu = () => {
    return (
        <div className="menu">
            <div className='m interior'><NavLink to="/interiors">ИНТЕРЬЕРЫ</NavLink></div>
            <div className='m houses'><NavLink to="/houses">ДОМА</NavLink></div>
            <div className='m commerce'><a to="/commerce">КОММЕРЦИЯ</a></div>
            <div className='m art'><a to="/art">АРТ-ОБЪЕКТЫ</a></div>
            <div className='m cauza'><NavLink to="/cauza">CAUZA</NavLink></div>
        </div>
    )
}

export default Menu