import React from 'react'
import './about.css'
import ME from '../../assets/me2.jpeg'
import { FaAward } from 'react-icons/fa'
import { HiUsers } from 'react-icons/hi'
import { GiOpenFolder } from 'react-icons/gi'

function About() {
  return (
    <section id="about">
      <h5>Get to know</h5>  
      <h2>About Me</h2>
      <h5>(entire dev experience)</h5>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-img">
            <img src={ME} alt="About" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>2+ Years working</small>
            </article>
            <article className='about__card'>
              <HiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>10+</small>
            </article>
            <article className='about__card'>
              <GiOpenFolder className='about__icon'/>
              <h5>Projects</h5>
              <small>6+</small>
            </article>
          </div>
          <p>My name is Vítor da Silva de Oliveira.</p>
          <p>I'm a back-end developer. I've been working as a software developer for 2 years, and I deliver clean and well-made codes.</p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About