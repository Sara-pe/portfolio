import style from './ComProject.module.css'
import { ProjectCard } from './ProjectCard'
import { useState } from 'react';


import Logo1 from '../../assets/logos_projects/wolf.svg'
import Logo2 from '../../assets/logos_projects/paygap.png'
import Logo3 from '../../assets/logos_projects/placeholder.svg'
import IconGreen from "../../assets/lucide_dot.svg";


import IconNext from '../../assets/right.svg'
import IconPrev from '../../assets/left.svg'


import WorkImage1 from "../../assets/Portfolio_images/wa.jpg";
import WorkImage2 from "../../assets/Portfolio_images/pg.jpg";
import WorkImage3 from "../../assets/Portfolio_images/portfolio.jpg";


export const CompProjects = () => {

    const projects = [
        {
            id: 1,
            title: "Werewolves Assistant",
            description: "A game assistant that serves as a guide for the game master. It organizes the different stages of the game, helping the master follow each step correctly.",
            extra: "It tracks votes and eliminations, and determines the game's end and winning team. It also includes a small help chatbot where the game master can ask questions and receive guidance.",
            tags: ["CSS", "HTML", "JavaScript"],
            linkGit: "https://github.com/Sara-pe/Werewolves_Assistant",
            linkWeb: "https://werewolves-assistant.vercel.app/",
            video: "https://player.vimeo.com/video/1165636672?badge=0&autopause=0&player_id=0&app_id=58479",
            img: WorkImage1


        },

        {
            id: 2,
            title: "PayGap",
            description: "Salary comparison tool based on profession and experience. Data from L’écart salarial 2024 (Institut pour l’égalité des femmes et des hommes). Group project as part of a one-week hackathon.",
            extra: "The platform helps women understand what they should be earning and tackle the 20% gender pay gap. It also includes a step-by-step guide on how to request a raise, plus additional resources.",
            tags: ["CSS", "HTML", "JavaScript"],
            linkGit: "https://github.com/sahardel92/PayGapHackathon",
            linkWeb: "",
            video: "https://player.vimeo.com/video/1167449737?badge=0&autopause=0&player_id=0&app_id=58479",
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

    const [touchStart, setTouchStart] = useState(0);

    const handleTouchStart = (e) => {
        setTouchStart(e.touches[0].clientX);
    };

    const handleTouchEnd = (e) => {
        const touchEnd = e.changedTouches[0].clientX;

        if (touchStart - touchEnd > 50) {
            // Swipe izquierda → siguiente
            setIdVisible(prev => (prev % projects.length) + 1);
        }
        if (touchStart - touchEnd < -50) {
            // Swipe derecha → anterior
            setIdVisible(prev => (prev - 2 + projects.length) % projects.length + 1);
        }
    };

    return (
        <>
            <div className={style.containerProjects}>
                <div className='flex flex-col gap-64 w-full gap-32-md'>
                    <div className='flex flex-row items-center justify-btw'>
                        <h2>Projects</h2>
                        <div className='line'></div>
                        <div className={style.iconWrapper}>
                            <div className={style.carrouselHeader}>
                                <img className={style.iconxs} src={Logo1} />
                                <img className={style.iconxs} src={IconGreen} />
                                <img className={style.iconxs} src={Logo2} />
                                <img className={style.iconxs} src={IconGreen} />
                                <img className={style.iconxs} src={Logo3} />

                                <img className={style.iconxs} src={IconGreen} />

                                <img className={style.iconxs} src={Logo1} />
                                <img className={style.iconxs} src={IconGreen} />
                                <img className={style.iconxs} src={Logo2} />
                                <img className={style.iconxs} src={IconGreen} />
                                <img className={style.iconxs} src={Logo3} />

                                <img className={style.iconxs} src={IconGreen} />

                            </div></div>
                    </div>

<div>

                    {/* CARROUSEL PROJECTS */}
                    <div className={style.carouselWrapper}>

                        <button onClick={() => { setIdVisible(prev => (prev - 2 + projects.length) % projects.length + 1) }}>
                            <div className={`flex justify-center items-center ${style.circle}`}>
                                <img src={IconPrev} alt="Previous" />
                            </div>
                        </button>
                        <div
                            className={style.carouselTrack}
                            onTouchStart={handleTouchStart}
                            onTouchEnd={handleTouchEnd}
                        >


                            {/* Carrousel style: only one visible */}
                            {/*     {

                                projects.map(project => project.id === idVisible && <ProjectCard key={project.id} project={project} />)
                            }  */}

                            {/* Carrousel style: peek with swipe for phone */}
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
                    <div className='flex flex-row justify-center'>
                        <div className={style.itemMarker}>
                            <div className={(idVisible === 1) ? style.marked : style.gray} ></div>
                            <div className={(idVisible === 2) ? style.marked : style.gray} ></div>
                            <div className={(idVisible === 3) ? style.marked : style.gray} ></div>
                           
                        </div> </div></div>
                </div>
                {/*  <button className='btn-sec'>View all projects</button> */}
            </div>
        </>
    );
}

