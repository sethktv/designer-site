import React from 'react'
import Logo from '../logo/Logo'
import Menu from '../menu/Menu'
import rockstar from '../../images/cauza/rockstar.jpg'
import './fotoContact.css'
import GoogleMap from './GoogleMap'
import Network from '../social-network/network'

const Cauza = () => {
    return (
        <div>
            <div className='App-header'>
                <Logo />
                <Menu />

            </div>
            <div className='foto-contact'>
                <img src={rockstar} alt="error" />
            </div>
            <div className='text-contact'>
                <p>Студия Cauza изучает отношения между людьми и пространством, делая рентгеновский снимок жизни наших клиентов в каждом проекте, чтобы предложить эстетику и набор пространственных решений, которые способствуют интеграции между людьми и пространствами, в которых они живут ,всегда помня о том,что пространство влияет на восприятие.</p>

            </div>
            <div className='text-contact' >
            
                <p>Садовническая набережная, 9</p> 
                <p>Коворкинг Балчуг</p>
                <p>+7 926 195-81-11</p>
                <p>house@cauza.ru</p> 
                
            </div>
            <GoogleMap />

            <div>
                <Network />
            </div>
            
        </div>
    )
}

export default Cauza