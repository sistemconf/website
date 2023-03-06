import React from "react";

const TimelineItem = ({ data }) => (
    <div className="timeline-item">
        <div className="timeline-item-content">
            <time>{data.time}</time>
            <p>{data.talk1}</p>
            <p className="room">{data.room1}</p>
            <p>{data.talk2}</p>
            <p className="room">{data.room2}</p>
            <span className="circle" />
        </div>
    </div>
);

export default TimelineItem;