import style from './ComProject.module.css'
import { ProjectCard } from './ProjectCard'

import Logo1 from '../../assets/logos_projects/wolf.svg'
import Logo2 from '../../assets/logos_projects/paygap.png'
import Logo3 from '../../assets/logos_projects/placeholder.svg'
import IconGreen from "../../assets/lucide_dot.svg";

export const Projects = () => {



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
                    <ProjectCard />
                </div>
            </div>
            <button className='btn-sec'>View all projects</button>
            </div>
        </>
    );
}
