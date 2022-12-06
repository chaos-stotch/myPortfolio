import React from 'react'
import './portfolio.css'
import { BsGithub } from 'react-icons/bs'
import IMG1 from '../../assets/portfolio-netflix.png'
import IMG2 from '../../assets/portfolio-pokedex.png'
import IMG3 from '../../assets/portfolio-SOON.png'
import IMG4 from '../../assets/portfolio-api.png'
import IMG5 from '../../assets/portfolio-mangareader.jpg'
import IMG6 from '../../assets/portfolio-mangareader-api.jpg'

const data = [
  {
    id: 1,
    image: IMG5,
    title: 'Manga Reader Front End',
    github: 'https://github.com/chaos-stotch/manga-reader-front',
    demo: "https://manga-reader-front.herokuapp.com/"
  },
  {
    id: 2,
    image: IMG6,
    title: 'Manga Reader API',
    github: 'https://github.com/chaos-stotch/manga-reader-api',
    demo: "none"
  },
  
  {
    id: 3,
    image: IMG1,
    title: 'Netflix clone',
    github: 'https://github.com/chaos-stotch/netflix-clone',
    demo: "none"
  },
  {
    id: 4,
    image: IMG2,
    title: 'Pokédex',
    github: 'https://github.com/chaos-stotch/pokedex',
    demo: 'https://chaos-stotch.github.io/pokedex/'
  },
  {
    id: 5,
    image: IMG4,
    title: 'Tasks API',
    github: 'https://github.com/chaos-stotch/todoList',
    demo: "none"
  },
  {
    id: 6,
    image: IMG3,
    title: 'soon',
    github: 'none',
    demo: "none"
  }
]

function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
      {
        data.map(({id, image, title, github, demo}) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                  <h3>{title}</h3>
                  <div className="portfolio__item-cta">
                    <a href={github} className='btn btn-primary' rel="noreferrer" target={'_blank'}><BsGithub/></a>
                    <a href={demo} className='btn btn-primary' rel="noreferrer" target={'_blank'}>Live Demo</a>
                </div>
            </article>
          )
        })
      }
      </div>
    </section>
  )
}

export default Portfolio
