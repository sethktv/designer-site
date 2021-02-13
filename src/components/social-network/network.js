import inst from '../../images/network/social-038-round_instagram.png'
import youtube from '../../images/network/social-018-round_youtube.png'
import vk from '../../images/network/vk-social-logotype.png'
import face from '../../images/network/social-006-round_facebook.png'

const Network = () => {
    return (
        <div>
            <hr />
            <div className="archive-footer">
                <div className="social-network">
                    <a className="network inst" href="instagram.com" > <img src={inst} alt='' /> </a>
                    <a className="network youtube" href="youtube.com" > <img src={youtube} alt='' /> </a>
                    <a className="network vk" href="vk.ru" > <img src={vk} alt='' /> </a>
                    <a className="network face" href="facebook.com" > <img src={face} alt='' /> </a>
                </div>
            </div>

            <div className="footer-address">
                <p>Садовническая набережная, 9</p>
                <p>Коворкинг Балчуг</p>
            </div>
        </div>

    )
}

export default Network