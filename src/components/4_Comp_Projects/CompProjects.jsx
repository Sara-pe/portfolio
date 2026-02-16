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
            linkGit: "https://github.com/Sara-pe/Werewolves_Assistant",
            linkWeb: "",
            video: "/video/werewolves_final.mp4",
            img: WorkImage1


        },

        {
            id: 2,
            title: "PayGap",
            description: "Salary comparison tool based on profession and experience. Data from Les chiffres de l’écart salarial 2024 (Institut pour l’égalité des femmes et des hommes).",
            extra: "The platform helps women understand what they should be earning and tackle the 20% gender pay gap. It also includes a step-by-step guide on how to request a raise, plus additional resources.",
            tags: ["CSS", "HTML", "JavaScript", "Php"],
            linkGit: "https://github.com/sahardel92/PayGapHackathon",
            linkWeb: "",
            video: "",
            img: WorkImage2

        },

        {
            id: 3,
            title: "Portfolio",
            description: "A portfolio website fully built in React, featuring a detailed presentation and in-depth explanation of recent projects, professional experience, and contact resources.",
            extra: "",
            tags: ["CSS", "HTML", "JavaScript", "React"],
            linkGit: "https://github.com/Sara-pe/portfolio",
            linkWeb: "",
            video: "",
            img: WorkImage3

        }
    ];

    const [idVisible, setIdVisible] = useState(1)



    return (
        <>
            <div className='flex flex-col gap-44 items-center'>
                <div className='flex flex-col gap-64 w-full'>
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



                    {/* Carousel */}
                    <div className={style.carouselWrapper}>

                        <button onClick={() => { setIdVisible(prev => (prev - 2 + projects.length) % projects.length + 1) }}>
                            <div className={`flex justify-center items-center ${style.circle}`}>
                                <img src={IconPrev} alt="Previous" />
                            </div>
                        </button>
                        <div className={style.carouselTrack}>

                            {/* Carrousel only one visible */}
                            {/*     {

                                projects.map(project => project.id === idVisible && <ProjectCard key={project.id} project={project} />)
                            }  */}

                            {/* Carrousel peek */}

                            {projects.map((project) => (
                                <ProjectCard
                                    key={project.id}
                                    project={project}
                                    className={
                                        project.id === idVisible
                                            ? style.active
                                            : project.id ===
                                                (idVisible - 2 + projects.length) % projects.length + 1  // idVisible-1 but maintining the loop 
                                                ? style.prev
                                                : project.id ===
                                                    (idVisible % projects.length) + 1 // idVisible+1 but maintining the loop 
                                                    ? style.next
                                                    : style.hidden
                                    }
                                />
                            ))}

                        </div>
                        <button onClick={() => { setIdVisible(prev => (prev % projects.length) + 1) }} className={`flex justify-center items-center ${style.circle}`}>
                            <img src={IconNext} alt="Next" />
                        </button>


                    </div>



                </div>
                {/*  <button className='btn-sec'>View all projects</button> */}
            </div>
        </>
    );
}

