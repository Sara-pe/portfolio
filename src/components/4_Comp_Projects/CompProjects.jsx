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


export const CompProjects = () => {

    const projects = [
        {
            id: 1,
            title: "Werewolves Assistant",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim.",
            tags: ["CSS", "HTML", "JavaScript"],
            linkGit: "https://github.com/Sara-pe/Loup-Garou-Assistant",
            linkWeb: "",
            img: WorkImage1
           

        },

        {
            id: 2,
            title: "PayGap",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim.",
            tags: ["CSS", "HTML", "JavaScript", "Php"],
            linkGit: "https://github.com/sahardel92/PayGapHackathon",
            linkWeb: "",
            img: WorkImage2
           
        },

         {
            id: 3,
            title: "Portfolio",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim.",
            tags: ["CSS", "HTML", "JavaScript", "React"],
            linkGit: "https://github.com/Sara-pe/portfolio",
            linkWeb: "",
            img: ""
           
        }
    ];

    const [idVisible, setIdVisible] = useState(1)



    return (
        <>
            <div className='flex flex-col gap-44 items-center'>
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

