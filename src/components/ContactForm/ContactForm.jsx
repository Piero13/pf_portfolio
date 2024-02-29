import { useState } from "react";

function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [stateMessage, setStateMessage] = useState(null);

    const [firstname, setFirstname] = useState('');
    const onChangeFirstname = (e) => {
        setFirstname(e.target.value)
    };

    const [lastname, setLastname] = useState('');
    const onChangeLastname = (e) => {
        setLastname(e.target.value)
    };

    const [email, setEmail] = useState('');
    const onChangeEmail = (e) => {
        setEmail(e.target.value)
    };

    const [phoneNumber, setPhoneNumber] = useState('');
    const onChangePhoneNumber = (e) => {
        setPhoneNumber(e.target.value)
    };

    const [message, setMessage] = useState('');
    const onChangeMessage = (e) => {
        setMessage(e.target.value)
    };

    const handleSubmit = (e) => {
        // e.persist();
        e.preventDefault();
        setIsSubmitting(true);
        setStateMessage('test en cours')
        console.log([lastname, firstname, email, phoneNumber, message]);
        setTimeout(() => {
            setStateMessage(null);
            setIsSubmitting(false);
        }, 3000);

        e.target.reset();
    }

    return (
        <>
            <form onSubmit={handleSubmit} method="post" id="contactForm" className="contact__form">
                <div className="form__group">
                    <label htmlFor="lastname" className="form__label">Nom</label>
                    <input type="text" name="lastname" id="lastname" className="form__input" value={lastname} onChange={onChangeLastname}/>
                </div>
                <div className="form__group">
                    <label htmlFor="firstname" className="form__label">Prénom</label>
                    <input type="text" name="firstname" id="firstname" className="form__input" value={firstname} onChange={onChangeFirstname}/>
                </div>
                <div className="form__group">
                    <label htmlFor="email" className="form__label">Email</label>
                    <input type="text" name="email" id="email" className="form__input" value={email} onChange={onChangeEmail}/>
                </div>
                <div className="form__group">
                    <label htmlFor="phone" className="form__label">Téléphone</label>
                    <input type="text" name="phone" id="phone" className="form__input" value={phoneNumber} onChange={onChangePhoneNumber}/>
                </div>
                <div className="form__group">
                    <label htmlFor="message" className="form__label">Message</label>
                    <textarea name="message" id="message" cols="30" rows="10" className="form__input" value={message} onChange={onChangeMessage}></textarea>
                </div>
                <input type="submit" value="Envoyer" disabled={isSubmitting} className="btn form__btn" title="Envoyer le message"/>
                {stateMessage && <p>{stateMessage}</p>}
            </form>
        </>
    )
}

export default ContactForm;