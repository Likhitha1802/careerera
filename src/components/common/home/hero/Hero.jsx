import React from 'react'
import "./hero.css"
import Title from "../../../common/title/Title"
const Hero = () => {
  return (
    <>
       <section className="hero">
        <div className="container">
            <div className="row">
                <Title subtitle='WELCOME TO CAREERERA' title="Best Online Education"/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere quibusdam aliquam at cupiditate unde sit doloribus aperiam, fugiat a, accusamus ad recusandae, consequatur ullam blanditiis voluptatum obcaecati inventore soluta quae.</p>
            <div className="button">
                <button className="primary-btn">
                    GET STARTED NOW <i className='fa fa-long-arrow-alt-right'></i>
                </button>
                <button className>
                    VIEW COURSE<i className='fa fa-long-arrow-alt-right'></i>
                </button>
            </div>

            </div>
        </div>
       </section>
       <div className="marigin"></div>
       
    </>
  )
}
export default Hero
