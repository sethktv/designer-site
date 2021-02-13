import '../../css/FotoBlocks.css'
import Logo from '../logo/Logo'
import Menu from '../menu/Menu'
import Network from '../social-network/network'

import img1 from '../../images/interior/Gold/1.jpg'
import img2 from '../../images/interior/Gold/2.jpg'
import img3 from '../../images/interior/Gold/3.jpg'
import img4 from '../../images/interior/Gold/4.jpg'
import img5 from '../../images/interior/Gold/5.jpg'
import img6 from '../../images/interior/Gold/6.jpg'
import img7 from '../../images/interior/Gold/7.jpg'
import img8 from '../../images/interior/Gold/8.jpg'
import img9 from '../../images/interior/Gold/9.jpg'


const Gold = () => {
    return (

        <div className="foto-blocks">
            <Logo />
            <Menu />
            <div className="foto foto1">
                <img src={img1} alt="error" />

            </div>

            <div className="foto foto2">
                <img src={img2} alt="error" />
            </div>

            <div className="foto foto3">
                <img src={img3} alt="error" />
            </div>

            <div className="foto foto4">
                <img src={img4} alt="error" />
            </div>

            <div className="foto foto5">
                <img src={img5} alt="error" />
            </div>

            <div className="foto foto6">
                <img src={img6} alt="error" />
            </div>

            <div className="foto foto7">
                <img src={img7} alt="error" />
            </div>

            <div className="foto foto7">
                <img src={img8} alt="error" />
            </div>

            <div className="foto foto7">
                <img src={img9} alt="error" />
            </div>
    
            <Network />
        </div>

    )
}
export default Gold