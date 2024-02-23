import { skillsDatas } from "../../datas/skillsDatas";

function SkillsGroup(props) {
    const id = props.id;
    const title = props.title;

    return (
        <>
            <section id={id} className={id}>
                <h2>{title}</h2>

                <div className="skills__levels">
                    {skillsDatas.map((skillsGroup) => (
                        <div className="skillsGroup">
                            <h3 className="skillsGroup__title">{skillsGroup.title}</h3>

                            <div className="skillsList">
                                
                            </div>
                        </div>
                    ))}
                </div>

                <div className="skills__timeline">

                </div>
            </section>
        </>
    )
}

export default SkillsGroup;