import React from 'react'
import { SiLinkedin, SiGithub, SiUpwork } from 'react-icons/si'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/v%C3%ADtor-silva-oliveira/"><SiLinkedin/></a>
        <a href="https://github.com/chaos-stotch/"><SiGithub/></a>
        <a href="https://www.upwork.com/freelancers/~0181cd3365c713ebfd"><SiUpwork/></a>
    </div>
  )
}

export default HeaderSocials