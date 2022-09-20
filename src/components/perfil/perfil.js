import React from "react";
import foto from "./../../assets/eu.png";
import "./perfil.css";
import email from "./../../assets/icons/email.svg";

import linkedin from "./../../assets/icons/linkedin.svg";
import git from "./../../assets/icons/gitHub.svg";
import insta from "./../../assets/icons/instagram.svg";

const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
};

// const openEmai = url => {
//     window.location.href = url;
// };

export default function Perfil() {
    return (
        <div className="content">
            <img src={foto} className="img-perfil" alt="Jean Michel" />
            <div className="name">Jean Michel</div>
            <div className="he">(He/him)</div>
            <div className="work-name">Software Developer</div>
            <div className="contact-txt">CONNECT WITH ME</div>

            <div className="contact-icons-conteiner">

                {/* <a className="contact-icons" href="mailto:michelfc42@gmail.com">
                    <img src={email} className="contact-icons" />
                </a> */}
                
                <img src={email}  className="contact-icons" alt="email" />

                <img src={linkedin} onClick={() => openInNewTab('https://www.linkedin.com/in/jean-michel-fernandes-carvalho-5682a8153/?locale=en_US')} className="contact-icons" alt="linkedin" />

                <img src={git} onClick={() => openInNewTab('https://github.com/Gl1tch42')} className="contact-icons" alt="git" />

                <img src={insta} onClick={() => openInNewTab('https://www.instagram.com/jeanmichelfc/')} className="contact-icons" alt="insta" />
            </div>
        </div>
    )
}
