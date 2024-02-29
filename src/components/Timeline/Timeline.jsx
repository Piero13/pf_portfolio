import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';
import { timelineDatas } from "../../datas/timelineDatas";
import './_timeline.scss';

function Timeline() {
    return (
        <>
            <VerticalTimeline id="verticalTimeline" lineColor="#e04f5f" layout="1-column-left">
                {timelineDatas.map((timelineElement) => (
                    <VerticalTimelineElement
                        className="timelineElement"
                        date={timelineElement.date}
                        dateClassName="timelineElementDate"
                        contentArrowStyle={{borderRightColor: '#d9ecf2'}}
                        contentStyle={{background: 'none', border: '2px solid #d9ecf2', boxShadow: 'none', padding: '8px'}}
                        icon={timelineElement.icon}
                        iconStyle={{border: "3px solid #e04f5f", boxShadow: 'none', backgroundColor: '#1aa6b7', width: '50px', height: '50px', transform: 'translateX(-5px)'}}
                    >
                        <h3 className="timelineElement__title">{timelineElement.workTitle}</h3>
                        <p className="timelineElement__subtitle">{timelineElement.society}</p>
                    </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
        </>
    )
}

export default Timeline;