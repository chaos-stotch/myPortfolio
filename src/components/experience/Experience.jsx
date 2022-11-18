import React from 'react'
import "./experience.css"
import { GoVerified } from 'react-icons/go'

function Experience() {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend development</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <GoVerified className='experience_details-icons'/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>  
            </article>
            <article className='experience__details'>
              <GoVerified className='experience_details-icons'/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <GoVerified className='experience_details-icons'/>
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <GoVerified className='experience_details-icons'/>
              <div>
                <h4>React</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <GoVerified className='experience_details-icons'/>
              <div>
                <h4>Api implementation</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__others">
          <h3>Others</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <GoVerified className='experience_details-icons'/>
              <div>
                <h4>Node JS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <GoVerified className='experience_details-icons'/>
              <div>
                <h4>Git</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <GoVerified className='experience_details-icons'/>
              <div>
                <h4>Linux</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <GoVerified className='experience_details-icons'/>
              <div>
                <h4>MySQL</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <GoVerified className='experience_details-icons'/>
              <div>
                <h4>Python</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience