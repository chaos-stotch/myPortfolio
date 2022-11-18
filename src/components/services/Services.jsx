import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'

function Services() {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
            <ul className='service__list'>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Landing page development.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Responsiveness adjustment.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Database implementations.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>API implementation.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Template creation.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>From your design to code.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Page styling with css.</p>
              </li>
            </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Complements</h3>
          </div>
            <ul className='service__list'>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Simple APIs.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Organized github.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Development of chrome extensions.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Clean and well-commented code.</p>
              </li>
            </ul>
        </article>
      </div>
    </section>
  )
}

export default Services