import { skillsDatas } from "../../datas/skillsDatas";
import Skill from "../Skill/skill";
import Timeline from "../Timeline/Timeline";

function Skills(props) {
    const id = props.id;
    const title = props.title;

    return (
        <>
            <section id={id} className={id}>
                <h2>{title}</h2>

                <div className="skills__display">
                    <div className="skills__levels">
                        {skillsDatas.map((skillsGroup) => (
                            <div className="skillsGroup">
                                <h3 className="skillsGroup__title">{skillsGroup.title}</h3>

                                <div className="skillsList">
                                    {skillsGroup.skills.map((skills) => (
                                        <Skill title={skills.skill} level={skills.level}/>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="skills__timeline">
                        <Timeline/>
                    </div>
                </div>  
            </section>
        </>
    )
}

export default Skills;