import React from "react";
import foto from "./../../assets/eu.png";
import "./perfil.css";
import email from "./../../assets/icons/email.svg";

import linkedin from "./../../assets/icons/linkedin.svg";
import git from "./../../assets/icons/gitHub.svg";
import insta from "./../../assets/icons/instagram.svg";

export default function Perfil() {
    return (
        <div className="content">
            <img src={foto} className="img-perfil" alt="Jean Michel" />
            <div className="name">Jean Michel</div>
            <div className="he">(He/him)</div>
            <div className="work-name">Software Developer</div>
            <div className="contact-txt">CONNECT WITH ME</div>
            
            <div className="contact-icons-conteiner">
                <img src={email} className="contact-icons" />

                <img src={linkedin} className="contact-icons" />

                <img src={git} className="contact-icons" />

                <img src={insta} className="contact-icons" />
            </div>
        </div>
    )
}
