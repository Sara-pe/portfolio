import style from './CompAbout.module.css'

import IconGreen from "../../assets/lucide_dot.svg";

export const ExpCard = () => {



    return (
        <>
<div className='flex flex-col gap-44'>

    <div className={style.entry}>
        <div className={style.entryHeader}>
            <div className='flex flex-row'>
                <h4>Gallery Registrar</h4>
                <img className={style.iconxs} src={IconGreen} alt="dot" />
                <h4 className="gray">Xavier Hufkens Gallery</h4>
            </div>
            <div className='line'></div>
            <p className="gray">04/2023 – 04/2024</p>
        </div>
        <p className="gray">
            Responsible for logistics coordination, artwork documentation, condition reports and transport management.
        </p>
    </div>

    <div className={style.entry}>
        <div className={style.entryHeader}>
            <div className='flex flex-row'>
                <h4>Comms & Design Lead</h4>
                <img className={style.iconxs} src={IconGreen} alt="dot" />
                <h4 className="gray">Gleam Gallery</h4>
            </div>
            <div className='line'></div>
            <p className="gray">10/2020 – 06/2022</p>
        </div>
        <p className="gray">
            Led communication strategy, visual identity, exhibition materials and digital content production.
        </p>
    </div>

    <div className={style.entry}>
        <div className={style.entryHeader}>
            <div className='flex flex-row'>
                <h4>Assistant Internship</h4>
                <img className={style.iconxs} src={IconGreen} alt="dot" />
                <h4 className="gray">Office Baroque Gallery</h4>
            </div>
            <div className='line'></div>
            <p className="gray">08/2019 – 02/2020</p>
        </div>
        <p className="gray">
            Assisted in exhibition production, client communication and administrative coordination.
        </p>
    </div>

</div>








        </>
    );
}