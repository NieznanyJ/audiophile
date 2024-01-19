import facebook from "../assets/shared/desktop/icon-facebook.svg";
import twitter from "../assets/shared/desktop/icon-twitter.svg";
import instagram from "../assets/shared/desktop/icon-instagram.svg";

function SocialList() {

  

    return (
        <div className="social-list">
            <img className="social-icon" src={facebook} alt="facebook" />
            <img className="social-icon" src={twitter} alt="twitter" />
            <img className="social-icon" src={instagram} alt="instagram" />
        </div>
    );
}

export default SocialList;
