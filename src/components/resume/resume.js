import React from 'react'
import "./resume.css"

let educationList = [
    {
        years: "2018-2023",
        school: "Universidade Veiga de Almeida (UVA)",
        corse: "Bachelor of Computer Engineering"
    }
];

export default function Resume() {
    return (
        <div className="content-resume">
            <div className="text-box">
                <div className="first-txt">
                    ABOUT.ME
                </div>
                <div className="regular-txt">I'm Jean Michel I'm 22 years old, I'm starting in the IT area, I've been working since 2020 counting on time from my internships, I'm still deciding what kind of professional I'll be and I've grown a lot in this journey in knowledge and in technologies and structures essentials, computing is a journey that we don't stop studying, I always want to be an excellent team member.</div>
                <hr className="hr1"></hr>

                <div className="education-title">
                    EDUCATION
                </div>
                {
                    educationList.map(e => {
                        return (<div className="component-education">
                            <div className="year">
                                {e.years}
                            </div>
                            <div className="education-content">
                                <div className="corse-title">{e.corse}</div>
                                <div className="school-title">{e.school}</div>
                            </div>
                        </div>)
                    })
                }
                <hr className="hr1"></hr>
                <div className="education-title">
                    EXPERIENCE
                </div>
            </div>
        </div >
    )
}
