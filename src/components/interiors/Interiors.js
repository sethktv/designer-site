import Logo from '../logo/Logo'
import Menu from '../menu/Menu'
import Network from '../social-network/network'
import { NavLink } from 'react-router-dom'
import img1 from '../../images/interior/1.png'
import img2 from '../../images/interior/2.png'
import img3 from '../../images/interior/3.png'
import img4 from '../../images/interior/4.png'
import img5 from '../../images/interior/5.png'
import img6 from '../../images/interior/6.png'
import img7 from '../../images/interior/7.png'
import img8 from '../../images/interior/8.png'
import img9 from '../../images/interior/9.png'




const Interiors = () => {
    return (

        <div>
            <div className='App-header'>

                <Logo />
                <Menu />

                <div className="post post1">
                    <NavLink to='/apartment-factory'>
                        <img src={img1} alt="error" />

                        <div className="text">
                            <p>Санкт-Петербург</p>
                            <h2>Апартаменты на Бывшей Фабрике</h2>
                            <p>ЯНВАРЬ 2018</p>
                        </div>
                    </NavLink>
                </div>

                <div className="post post2">
                    <NavLink to='/time-and-form'>
                        <img src={img2} alt="error" />

                        <div className="text">
                            <p>Эскизный Проект</p>
                            <h2>Время и Форма</h2>
                            <p>СЕНТЯБРЬ 2018</p>
                        </div>
                    </NavLink>
                </div>

                <div className="post post3">
                    <NavLink to="/apartment-white">
                        <img src={img3} alt="error" />

                        <div className="text">
                            <p>Москва</p>
                            <h2>Апартаменты в Белом</h2>
                            <p>МАЙ 2020</p>
                        </div>
                    </NavLink>
                </div>

                <div className="post post4">
                    <NavLink to='/classic'>
                        <img src={img4} alt="error" />

                        <div className="text">
                            <p>Москва</p>
                            <h2>Классика vol.1</h2>
                            <p>АПРЕЛЬ 2017</p>
                        </div>
                    </NavLink>
                </div>

                <div className="post post5">
                    <NavLink to='classic2'>
                        <img src={img5} alt="error" />

                        <div className="text">
                            <p>Москва </p>
                            <h2>Классика vol.2</h2>
                            <p>АПРЕЛЬ 2020</p>
                        </div>
                    </NavLink>
                </div>

                <div className="post post6">
                    <NavLink to='/collectors-house'>
                        <img src={img6} alt="error" />

                        <div className="text">
                            <p>Санкт-Петербуг</p>
                            <h2>Дом Коллекционера</h2>
                            <p>Январь 2017</p>
                        </div>
                    </NavLink>
                </div>

                <div className="post post7">
                    <NavLink to="/mild-modernism">
                        <img src={img7} alt="error" />

                        <div className="text">
                            <p>Республика Крым</p>
                            <h2>Мягкий Модернизм в Тавриде</h2>
                            <p>ОКТЯБРЬ 2019</p>
                        </div>
                    </NavLink>
                </div>

                <div className="post post8">
                    <NavLink to='gold'>
                        <img src={img8} alt="error" />

                        <div className="text">
                            <p>Подмосковье</p>
                            <h2>Золото и Изумруды.</h2>
                            <p>Август 2019</p>
                        </div>
                    </NavLink>
                </div>

                <div className="post post9">
                    <NavLink to='/arbat'>
                        <img src={img9} alt="error" />

                        <div className="text">
                            <p>Москва</p>
                            <h2>Квартира на Старом Арбате</h2>
                            <p>Сентябрь 2018</p>
                        </div>
                    </NavLink>
                </div>

            </div>
            <Network />
        </div>


    )
}

export default Interiors