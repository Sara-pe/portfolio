import style from './ComProject.module.css'
import { ProjectCard } from './ProjectCard'
import { useState } from 'react';


import Logo1 from '../../assets/logos_projects/wolf.svg'
import Logo2 from '../../assets/logos_projects/paygap.png'
import Logo3 from '../../assets/logos_projects/placeholder.svg'
import IconGreen from "../../assets/lucide_dot.svg";


import IconNext from '../../assets/right.svg'
import IconPrev from '../../assets/left.svg'


import WorkImage1 from "../../assets/Portfolio_images/wa.png";
import WorkImage2 from "../../assets/Portfolio_images/pg.png";
import WorkImage3 from "../../assets/Portfolio_images/portfolio.png";


export const CompProjects = () => {

    const projects = [
        {
            id: 1,
            title: "Werewolves Assistant",
            description: "A game assistant that serves as a guide for the game master. It organizes the different stages of the game, helping the master follow each step correctly.",
            extra: "It tracks votes and eliminations, and determines the game's end and winning team. It also includes a small help chatbot where the game master can ask questions and receive guidance.",
            tags: ["CSS", "HTML", "JavaScript"],
            linkGit: "https://github.com/Sara-pe/Loup-Garou-Assistant",
            linkWeb: "",
            img: WorkImage1
           

        },

        {
            id: 2,
            title: "PayGap",
            description: "A tool that helps you calculate whether your salary is below or above the average, based on your profession and experience level.",
            extra: "The platform is designed to help women gain clarity about what they should be earning and to address the gender pay gap of 20%. The website also provides a step-by-step written tutorial on how to request a raise, as well as additional external resources.",
            tags: ["CSS", "HTML", "JavaScript", "Php"],
            linkGit: "https://github.com/sahardel92/PayGapHackathon",
            linkWeb: "",
            img: WorkImage2
           
        },

         {
            id: 3,
            title: "Portfolio",
            description: "A portfolio website fully built in React, featuring a detailed presentation and in-depth explanation of recent projects, professional experience, and contact resources.",
            extra:"",
            tags: ["CSS", "HTML", "JavaScript", "React"],
            linkGit: "https://github.com/Sara-pe/portfolio",
            linkWeb: "",
            img: WorkImage3
           
        }
    ];

    const [idVisible, setIdVisible] = useState(1)



    return (
        <>
            <div className='flex flex-col gap-44 items-center max-width'>
                <div className='flex flex-col gap-64'>
                    <div className='flex flex-row items-center justify-btw'>
                        <h2>Projects</h2>
                        <div className='line'></div>
                        <div className='flex flex-row gap'>
                            <img className={style.iconxs} src={Logo1} />
                            <img className={style.iconxs} src={IconGreen} />
                            <img className={style.iconxs} src={Logo2} />
                            <img className={style.iconxs} src={IconGreen} />
                            <img className={style.iconxs} src={Logo3} />

                        </div>
                    </div>



                    <div className='flex justify-center items-center'>
                        <div className='flex flex-row justify-btw items-center'>

                            <button onClick={() => { setIdVisible(prev => (prev - 2 + projects.length) % projects.length + 1) }}>
                                <div className={`flex justify-center items-center ${style.circle}`}>
                                    <img src={IconPrev} alt="Previous" />
                                </div>
                            </button>

                            {

                                projects.map(project => project.id === idVisible && <ProjectCard key={project.id} project={project} />)
                            }
                            <button onClick={() => { setIdVisible(prev => (prev % projects.length) + 1) }} className={`flex justify-center items-center ${style.circle}`}>
                                <img src={IconNext} alt="Next" />
                            </button>


                        </div>

                    </div>

                </div>
                <button className='btn-sec'>View all projects</button>
            </div>
        </>
    );
}

