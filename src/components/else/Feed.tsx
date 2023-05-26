import React from 'react';
import './Feed.css';



const Feed = ({achievements} : {achievements : Array<any>}) => {
    return (
        <div className="achievements-container">
            <h1 className="achievements-title">이력 / 수상</h1>
            {achievements.map((achievement, index) => (
                <div className="achievement-item p-4" key={index}>
                    <div className="achievement-badge">{achievement.name[0]}</div>
                    <div className="achievement-content ml-8 flex flex-col">
                        <h2 className="achievement-name pb-2">{achievement.name}</h2>
                        <p className="achievement-description pb-2">{achievement.description}</p>
                        <p className="achievement-date">{achievement.date}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Feed;
