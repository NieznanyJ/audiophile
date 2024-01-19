import "./styles/footer.css";
import logo from "../assets/shared/desktop/logo.svg";
import SocialList from "./SocialList";
import { NavLink } from "react-router-dom";

function FooteSection() {
    return (
        <footer className="footer">
            <NavLink className="nav-link" to="/" end>
                <img className="logo" src={logo} alt="logo" />
            </NavLink>

            <div>
                <ul>
                    <li>
                        <NavLink className="nav-link" to="/" end>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="nav-link" to="headphones">
                            HEADPHONES
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="nav-link" to="speakers">
                            SPEAKERS
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="nav-link" to="earphones">
                            EARPHONES
                        </NavLink>
                    </li>
                </ul>

                <p className="body">
                    Audiophile is an all in one stop to fulfill your audio
                    needs. We're a small team of music lovers and sound
                    specialists who are devoted to helping you get the most out
                    of personal audio. Come and visit our demo facility - we’re
                    open 7 days a week.
                </p>

                <p className="body">Copyright 2021. All Rights Reserved</p>

                <SocialList />
            </div>
        </footer>
    );
}

export default FooteSection;
