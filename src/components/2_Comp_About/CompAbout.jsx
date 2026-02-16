import style from './CompAbout.module.css'
import { useEffect, useState } from "react"

import { ExpCard } from './ExpCard'
import { EduCard } from './EduCard'


export const CompAbout = () => {


    const [activeSection, setActiveSection] = useState("exp");



    return (
        <>
            <div className='flex flex-col gap-64'>
                <div className='flex flex-row gap-64 flex-col-md items-start-md gap-8-md'>
                    <button className={
                        style.headerButton + ' ' +
                        (activeSection === "exp" ? style.green : '')
                    } onClick={() => { setActiveSection("exp") }}>  <h2>My experience</h2> </button>
                    <button className={
                        style.headerButton + ' ' +
                        (activeSection === "edu" ? style.green : '')
                    } onClick={() => { setActiveSection("edu") }}>   <h2>My education</h2> </button>
               {/*     <h2>Soft skills</h2> */}
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

