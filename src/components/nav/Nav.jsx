import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {HiOutlineUser} from 'react-icons/hi'
import {FiBook} from 'react-icons/fi'
import {FiClipboard} from 'react-icons/fi'
import {BiMessageDetail} from 'react-icons/bi'
import {useState} from 'react'

function Nav() {
  const [activeNav, setActiveNav] = useState("#")
  return (
    <nav>
        <a href="/#" onClick={()=>setActiveNav("#")} className={activeNav === "#" ? "active" : ""}><AiOutlineHome/></a>
        <a href="#about" onClick={()=>setActiveNav("#about")} className={activeNav === "#about" ? "active" : ""}><HiOutlineUser/></a>
        <a href="#experience" onClick={()=>setActiveNav("#experience")} className={activeNav === "#experience" ? "active" : ""}><FiBook/></a>
        <a href="#portfolio" onClick={()=>setActiveNav("#portfolio")} className={activeNav === "#portfolio" ? "active" : ""}><FiClipboard/></a>
        <a href="#contact" onClick={()=>setActiveNav("#contact")} className={activeNav === "#contact" ? "active" : ""}><BiMessageDetail/></a>
    </nav>
  )
}


export default Nav