var title;
var level;

function Skill(props) {

    title = props.title;
    level = props.level;

    return (
        <>
            <p className="skillTitle">{title}</p>
            <div className="progressBar">
                <div id={title} className="progressLevel" style={{width: level + "%"}}></div>
            </div>
        </>
    )

};

export default Skill;