import style from './CompAbout.module.css'
import { useEffect, useState } from "react"

import { ExpCard } from './ExpCard'
import { EduCard } from './EduCard'


export const CompAbout = () => {


    const [activeSection, setActiveSection] = useState("exp");



    return (
        <>
            <div className='flex flex-col gap-64 gap-32-md'>
                <h2>About</h2>
                <div className={style.sliderButtons}>

                    <button className={
                        style.headerButton + ' ' +
                        (activeSection === "exp" ? style.green : style.disabled)
                    } onClick={() => { setActiveSection("exp") }}>  <h3>My experience</h3> </button>
    
                    <button className={
                        style.headerButton + ' ' +
                        (activeSection === "edu" ? style.green : style.disabled)
                    } onClick={() => { setActiveSection("edu") }}>   <h3>My education</h3> </button>
                    {/*     <h2>Soft skills</h2> */}

                    <div className={style.greenRectangle + ' ' + (activeSection === "exp" ? style.left : style.right)
                    } ></div>
                </div>
                {
                    activeSection === "exp" &&
                    <ExpCard />}

                {activeSection === "edu" &&
                    <EduCard />}

                <a href="/cv/cv_green.pdf" download>
                    <button className='btn-sec'>Download CV</button>
                </a>
            </div >
        </>
    );
}

