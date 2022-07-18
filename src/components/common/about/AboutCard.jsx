import React from 'react'
import Title from "../../common/title/Title"
import { homeAbout } from '../../../data'
import AWrapper from './AWrapper'
import "./about.css"

const AboutCard = () => {
  return (
    <>
    <section className="aboutHome">
        <div className="container flexSB">
            <div className="left row">
                <img src="https://images.unsplash.com/photo-1522010265321-fd346cc64d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt=" "/>
            </div>
            <div className="right row">
                <Title subtitle="Learn Anything" title="Benefits about Online Learning Expertise"/>
                <div className="items">
                    {homeAbout.map((val)=>(
                        <div className="item flexSB">
                            <div className="img">
                                <img src={val.cover} alt="" />
                            </div>
                            <div className="text">
                                <h2>{val.title}</h2>
                                <p>{val.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
    <AWrapper/>
    </>
  )
}
export default AboutCard
