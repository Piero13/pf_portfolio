import { FaGithub, FaInstagram, FaWhatsapp, FaLinkedin, FaPhone, FaEnvelope, FaLocationDot } from "react-icons/fa6";

function ContactInfos() {
    return (
        <>
            <div className="contact__infos">
                <div className="personnalInfos">
                    <a href="mailto:pf.creations13@gmail.com"><FaEnvelope className="personnalInfos__icon"/>pf.creations13@gmail.com</a>
                    <a href="tel:+33651853051"><FaPhone className="personnalInfos__icon"/>06 51 85 30 51</a>
                    <p><FaLocationDot className="personnalInfos__icon"/>13012 Marseille</p>
                </div>
                <div className="socialInfos">
                    <a href="https://github.com/Piero13" target="_blank" rel="noreferrer" title="Github">
                        <FaGithub className="socialInfos__icon"/>
                    </a>
                    <a href="https://www.instagram.com/pf.creations13/" target="_blank" rel="noreferrer" title="Instagram">
                        <FaInstagram className="socialInfos__icon"/>
                    </a>
                    <a href="https://wa.me/33651853051" target="_blank" rel="noreferrer" title="Whatsapp">
                        <FaWhatsapp className="socialInfos__icon"/>
                    </a>
                    <a href="https://www.linkedin.com/in/pierre-fasce-9a5a001a0/" target="_blank" rel="noreferrer" title="Linkedin">
                        <FaLinkedin className="socialInfos__icon"/>
                    </a>
                </div>
            </div>
        </>
    )
}

export default ContactInfos;