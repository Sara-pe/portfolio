

import './App.css'

import { useState } from "react"

import { CompIntro } from './components/1_Comp_Intro/CompIntro'
import { CompAbout } from './components/2_Comp_About/CompAbout'
import { CompStack } from './components/3_Comp_Stack/CompStack'
import { CompProjects } from './components/4_Comp_Projects/CompProjects'
import { CompForm } from './components/5_Comp_Form/CompForm'


import LogoIcon from './assets/logo-white.png';

import IconGreen from './assets/lucide_dot.svg';

import IconMess from './assets/contact_icons/bubble.svg'

import BurguerMenu from './assets/menu.svg'
import IconClose from "./assets/close.svg"


function App() {

  const [formVisible, setFormVisible] = useState(false)
   const [navVisible, setNavVisible] = useState(false)

  return (
    <>
      <div className='page flex flex-col items-center justify-center max-width'>
        <nav>

          <div className='flex flex-row items-center justify-start gap-16'>
            <img className="logo-nav" src={LogoIcon} alt="Logo" />
      {/*<h4>Sara Pena</h4> */} 
          </div>

          <div className='nav-phone'>
            <button onClick={() => setNavVisible(prev => !prev)}><img className='icon-menu' src={(navVisible === false ) ? BurguerMenu : IconClose} alt="Open Menu" /></button>
          </div>

          <div className={(navVisible === false ) ? 'menu-none' : 'menu-links'}>
            <a href="#about">
              About
            </a>
            <a href="#stack">
              My Stack
            </a>

            <a href="#projects">
              Projects
            </a>

            <button onClick={() => setFormVisible(true)} className='btn-contact'>Contact me</button>
          </div>

        </nav>

        <main className='flex flex-col gap-264 gap-140-md'>
          <div id="intro"><CompIntro onFormVisible={() => setFormVisible(true)} /></div>
          <div id="about"><CompAbout /></div>
          <div id="stack"><CompStack /></div>
          <div id="projects"><CompProjects /></div>
          {formVisible && <div><CompForm onClose={() => setFormVisible(false)} /></div>}
        </main>

        <footer className='flex flex-col gap-88 items-start-md '>
          <div className='flex flex-row justify-btw items-center flex-col-md gap-32-md items-start-md'>
            <h1>Let's Work Together</h1>
            <div className='line'></div>
            <button
              onClick={() => setFormVisible(true)} className='btn-prin'>Let's Talk</button>
          </div>

          <div className='flex flex-row justify-btw items-center flex-col-md gap-8-md items-start-md gap-32-md'>
            <div className='flex flex-row justify-start items-center items-start-md '>
              <a href="https://github.com/Sara-pe">

                <svg
                  className="icon"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2C10.6868 2 9.38642 2.25866 8.17317 2.7612C6.95991 3.26375 5.85752 4.00035 4.92893 4.92893C3.05357 6.8043 2 9.34784 2 12C2 16.42 4.87 20.17 8.84 21.5C9.34 21.58 9.5 21.27 9.5 21V19.31C6.73 19.91 6.14 17.97 6.14 17.97C5.68 16.81 5.03 16.5 5.03 16.5C4.12 15.88 5.1 15.9 5.1 15.9C6.1 15.97 6.63 16.93 6.63 16.93C7.5 18.45 8.97 18 9.54 17.76C9.63 17.11 9.89 16.67 10.17 16.42C7.95 16.17 5.62 15.31 5.62 11.5C5.62 10.39 6 9.5 6.65 8.79C6.55 8.54 6.2 7.5 6.75 6.15C6.75 6.15 7.59 5.88 9.5 7.17C10.29 6.95 11.15 6.84 12 6.84C12.85 6.84 13.71 6.95 14.5 7.17C16.41 5.88 17.25 6.15 17.25 6.15C17.8 7.5 17.45 8.54 17.35 8.79C18 9.5 18.38 10.39 18.38 11.5C18.38 15.32 16.04 16.16 13.81 16.41C14.17 16.72 14.5 17.33 14.5 18.26V21C14.5 21.27 14.66 21.59 15.17 21.5C19.14 20.16 22 16.42 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7362 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
              <img className='icon' src={IconGreen} alt="" />
              <a href="https://www.linkedin.com/in/sara-pena-038611268/">
                <svg
                  className="icon"
                  viewBox="0 0 40 40"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M30.7334 5.09998H9.26676C8.16264 5.10305 7.10462 5.54303 6.32389 6.32377C5.54315 7.1045 5.10318 8.16252 5.1001 9.26664V30.7333C5.10318 31.8374 5.54315 32.8955 6.32389 33.6762C7.10462 34.4569 8.16264 34.8969 9.26676 34.9H30.7334C31.8385 34.9 32.8983 34.461 33.6797 33.6796C34.4611 32.8982 34.9001 31.8384 34.9001 30.7333V9.26664C34.9001 8.16157 34.4611 7.10177 33.6797 6.32036C32.8983 5.53896 31.8385 5.09998 30.7334 5.09998ZM33.2334 30.7333C33.2291 31.395 32.9643 32.0284 32.4964 32.4963C32.0285 32.9641 31.3951 33.2289 30.7334 33.2333H9.26676C8.60507 33.2289 7.97172 32.9641 7.50382 32.4963C7.03593 32.0284 6.77113 31.395 6.76676 30.7333V9.26664C6.77113 8.60495 7.03593 7.9716 7.50382 7.5037C7.97172 7.0358 8.60507 6.77101 9.26676 6.76664H30.7334C31.3951 6.77101 32.0285 7.0358 32.4964 7.5037C32.9643 7.9716 33.2291 8.60495 33.2334 9.26664V30.7333Z" fill="currentColor" />
                  <path d="M10.6267 17.9134C10.6267 17.4713 10.8023 17.0474 11.1149 16.7349C11.4274 16.4223 11.8513 16.2467 12.2934 16.2467C12.7354 16.2467 13.1593 16.4223 13.4719 16.7349C13.7844 17.0474 13.96 17.4713 13.96 17.9134V28.7467C13.96 29.1887 13.7844 29.6127 13.4719 29.9252C13.1593 30.2378 12.7354 30.4134 12.2934 30.4134C11.8513 30.4134 11.4274 30.2378 11.1149 29.9252C10.8023 29.6127 10.6267 29.1887 10.6267 28.7467V17.9134Z" fill="currentColor" />
                  <path d="M12.2934 12.9067C13.2139 12.9067 13.96 12.1605 13.96 11.24C13.96 10.3196 13.2139 9.57336 12.2934 9.57336C11.3729 9.57336 10.6267 10.3196 10.6267 11.24C10.6267 12.1605 11.3729 12.9067 12.2934 12.9067Z" fill="currentColor" />
                  <path d="M29.3667 22.2833V28.75C29.3667 29.192 29.1911 29.6159 28.8785 29.9285C28.5659 30.241 28.142 30.4166 27.7 30.4166C27.258 30.4166 26.834 30.241 26.5215 29.9285C26.2089 29.6159 26.0333 29.192 26.0333 28.75V22.2833C26.0333 21.5694 25.7497 20.8848 25.2449 20.38C24.7402 19.8752 24.0555 19.5916 23.3417 19.5916C22.6278 19.5916 21.9431 19.8752 21.4384 20.38C20.9336 20.8848 20.65 21.5694 20.65 22.2833V28.75C20.65 29.192 20.4744 29.6159 20.1618 29.9285C19.8493 30.241 19.4253 30.4166 18.9833 30.4166C18.5413 30.4166 18.1174 30.241 17.8048 29.9285C17.4922 29.6159 17.3167 29.192 17.3167 28.75V17.9166C17.3235 17.4768 17.5013 17.0568 17.8124 16.7457C18.1235 16.4347 18.5434 16.2569 18.9833 16.25C19.2656 16.2422 19.5447 16.311 19.7912 16.4489C20.0376 16.5867 20.2422 16.7887 20.3833 17.0333C21.2998 16.5139 22.3365 16.2442 23.3899 16.2512C24.4433 16.2582 25.4763 16.5416 26.3858 17.0731C27.2953 17.6046 28.0493 18.3656 28.5724 19.2799C29.0955 20.1943 29.3694 21.2299 29.3667 22.2833Z" fill="currentColor" />
                </svg>
              </a>
            </div>


            <div className='line'></div>
            <div className='flex flex-row justify-end items-center gap-8'>
              <img src={IconMess} className='icon-m' alt="Send an email" />
              <a className='email' href="mailto:sarapena.z@gmail.com">sarapena.z@gmail.com</a>
            </div>
          </div>


          <div className='flex flex-row items-center justify-center gap-28 footer-nav'>
            <a href="#intro">
              Home
            </a>

            <a href="#about">
              About
            </a>
            <a href="#stack">
              My Stack
            </a>

            <a href="#projects">
              Projects
            </a>
            {/*  <a href="#">
              Contact
            </a>*/}

          </div>
<div className='copyright'>
<p>© 2026 Sara Pena All Rights Reserved.</p>
   </div>    
    </footer>
      </div>
    </>
  )
}

export default App
