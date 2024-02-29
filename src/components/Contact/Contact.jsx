import ContactForm from "../ContactForm/ContactForm";
import ContactInfos from "../ContactInfos/ContactInfos";

function Contact(props) {
    const id = props.id;
    const title = props.title;

    return (
        <>
            <section id={id} className={id}>
                <h2 className="contact__title">{title}</h2>

                <div className="contact__display">
                    <ContactForm/>

                    <ContactInfos/>
                </div>
            </section>
        </>
    )
}

export default Contact;