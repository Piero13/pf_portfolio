import Slider from '../Slider/Slider';
import {projectsDatas} from '../../datas/projectsDatas'

function Portfolio(props) {
    const id = props.id;
    const title = props.title;

    return (
        <>
            <section id={id} className={id}>
                <h2>{title}</h2>

                <Slider slides={projectsDatas}/>
            </section>
        </>
    )
}

export default Portfolio;