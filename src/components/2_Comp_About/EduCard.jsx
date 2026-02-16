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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim.
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim.
        </p>
    </div>

    <div className={style.entry}>
        <div className={style.entryHeader}>
            <div className='flex flex-row'>
                <h4>Bachelor’s degree in Fine Arts</h4>
                <img className={style.iconxs} src={IconGreen} alt="dot" />
                <h4 className="gray">Vigo University</h4>
            </div>
            <div className='line'></div>
            <p className="gray">2015 - 2019</p>
        </div>
        <p className="gray">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim.
        </p>
    </div>

    <div className={style.entry}>
        <div className={style.entryHeader}>
            <div className='flex flex-row'>
                <h4>Bachelor’s in Architecture</h4>
                <img className={style.iconxs} src={IconGreen} alt="dot" />
                <h4 className="gray">A Coruña University</h4>
            </div>
            <div className='line'></div>
            <p className="gray">2012 - 2015</p>
        </div>
        <p className="gray">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim.
        </p>
    </div>

</div>




        </>
    );
}