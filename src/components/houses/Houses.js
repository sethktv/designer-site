import Logo from "../logo/Logo"
import Menu from "../menu/Menu"
import Network from "../social-network/network"

import houses1 from '../../images/houses/21.jpg'
import houses2 from '../../images/houses/22.jpg'
import houses3 from '../../images/houses/23.jpg'
import houses4 from '../../images/houses/24.jpg'
import houses5 from '../../images/houses/25.jpg'
import houses6 from '../../images/houses/26.jpg'
import houses7 from '../../images/houses/27.jpg'
import houses8 from '../../images/houses/28.jpg'

const Houses = () => {
    return (
        <div>
            <div className='App-header'>

                <Logo />
                <Menu />

                <div className="post post1">
                    <a>
                        <img src={houses1} alt="error" />
                        <div className="text">
                            <p>Photos by Matthew Millman</p>
                            <h2>Wasatch House by Olson Kundig in Utah</h2>
                            <p>SEPTEMBER 16, 2017</p>
                        </div>
                    </a>
                </div>

                <div className="post post2">
                    <a>
                        <img src={houses2} alt="error" />
                        <div className="text">
                            <p>Photos by William Waldron, Gregory Holm</p>
                            <h2>200-year-old barn converted into a modern family home</h2>
                            <p>MARCH 10, 2019</p>
                        </div>
                    </a>
                </div>

                <div className="post post3">
                    <a>
                        <img src={houses3} alt="error" />
                        <div className="text">
                            <p>The Art House by Nina Maya Interiors</p>
                            <h2>Photos by Felix Forest</h2>
                            <p>OCTOBER 03, 2020</p>
                        </div>
                    </a>
                </div>

                <div className="post post4">
                    <a>
                        <img src={houses4} alt="error" />
                        <div className="text">
                            <p>Liana Tulum Airbnb</p>
                            <h2>Sydney Apartment</h2>
                            <p>OCTOBER 26, 2020</p>
                        </div>
                    </a>
                </div>

                <div className="post post5">
                    <a >
                        <img src={houses5} alt="error" />
                        <div className="text">
                            <p>Photos by Ben Hosking</p>
                            <h2>North Perth House by Nic Brunsdont</h2>
                            <p>APRIL 14, 2020</p>
                        </div>
                    </a>
                </div>

                <div className="post post6">
                    <a>
                        <img src={houses6} alt="error" />
                        <div className="text">
                            <p>Photos by Sharyn Cairns</p>
                            <h2>Residence One by Jolson Architecture and Interiors</h2>
                            <p>JULY 22, 2018</p>
                        </div>
                    </a>
                </div>

                <div className="post post7">
                    <a>
                        <img src={houses7} alt="error" />
                        <div className="text">
                            <p>Photos by Koichi Torimura</p>
                            <h2>House in Asaka by Aso Toshihiro</h2>
                            <p>APRIL 28, 2017</p>
                        </div>
                    </a>
                </div>

                <div className="post post8">
                    <a>
                        <img src={houses8} alt="error" />
                        <div className="text">
                            <p>Photos by Prue Ruscoe</p>
                            <h2>Bondi Bombora house in Sydney by Luigi Rosselli Architects</h2>
                            <p>MAY 05, 2015</p>
                        </div>
                    </a>
                </div>
            </div>
            <Network />
        </div>

    )
}

export default Houses