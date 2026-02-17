import style from './CompAbout.module.css'

import IconGreen from "../../assets/lucide_dot.svg";

export const EduCard = () => {



    return (
        <>
   <div className='flex flex-col gap-44'>

    <div className={style.entry}>
        <div className={style.entryHeader}>
            <div className='flex flex-row'>
                <h4>Full-stack Developer training</h4>
                <img className={style.iconxs} src={IconGreen} alt="dot" />
                <h4 className="gray">Interface 3</h4>
            </div>
            <div className='line'></div>
            <p className="gray">2025 - 2026</p>
        </div>
        <p className="gray">
            One-year intensive training program focused on front-end development, UX/UI design, and full-stack architecture. Hands-on experience with React, Angular, Node.js, and MongoDB
        </p>
    </div>

    <div className={style.entry}>
        <div className={style.entryHeader}>
            <div className='flex flex-row'>
                <h4>Master’s in Visual Arts</h4>
                <img className={style.iconxs} src={IconGreen} alt="dot" />
                <h4 className="gray">LUCA School of Arts</h4>
            </div>
            <div className='line'></div>
            <p className="gray">2020 - 2022</p>
        </div>
        <p className="gray">
            Research-driven program focused on critical analysis and contemporary art theory, strengthening conceptual thinking and structured problem framing applicable to UX strategy.
        </p>
    </div>

    <div className={style.entry}>
        <div className={style.entryHeader}>
            <div className='flex flex-row'>
                <h4>Bachelor’s in Fine Arts</h4>
                <img className={style.iconxs} src={IconGreen} alt="dot" />
                <h4 className="gray">Vigo University</h4>
            </div>
            <div className='line'></div>
            <p className="gray">2015 - 2019</p>
        </div>
        <p className="gray">
            Programme in visual arts including graphic design, composition, and digital tools such as Photoshop and Illustrator, building a strong foundation in visual communication and layout.
        </p>
    </div>

    <div className={style.entry}>
        <div className={style.entryHeader}>
            <div className='flex flex-row'>
                <h4>Bachelor’s in Architecture</h4>
                <img className={style.iconxs} src={IconGreen} alt="dot" />
                <h4 className="gray">Coruña University</h4>
            </div>
            <div className='line'></div>
            <p className="gray">2012 - 2015</p>
        </div>
        <p className="gray">
           Studies in architectural design, construction, and technical drawing, developing spatial reasoning and a structured way of approaching design problems.
        </p>
    </div>

</div>




        </>
    );
}