import style from './CompStack.module.css'

import Icon1 from "../../assets/stack_icons/1.png";
import Icon2 from "../../assets/stack_icons/2.png";
import Icon3 from "../../assets/stack_icons/3.png";
import Icon4 from "../../assets/stack_icons/4.png";
import Icon5 from "../../assets/stack_icons/5.png";
import Icon6 from "../../assets/stack_icons/6.svg";
import Icon7 from "../../assets/stack_icons/7.svg";
import Icon8 from "../../assets/stack_icons/8.png";
import Icon9 from "../../assets/stack_icons/9.webp";
import Icon10 from "../../assets/stack_icons/10.svg";
import Icon11 from "../../assets/stack_icons/11.svg";
import Icon12 from "../../assets/stack_icons/12.svg";
import Icon13 from "../../assets/stack_icons/13.png";
import Icon14 from "../../assets/stack_icons/14.png";

import IconGreen from "../../assets/lucide_dot.svg";


export const CompStack = () => {




    return (
        <>
            <div className='flex flex-col gap-64'>
                <div className='flex flex-row items-center justify-btw'>
                <h2>My stack</h2>
                <div className='line'></div>
                <div className={style.carrouselStack}>
                    <img className={style.iconxs} src={Icon10} alt="JavaScript" />
                    <img className={style.iconxs} src={IconGreen} alt="dot" />
                    <img className={style.iconxs} src={Icon13} alt="React" />
                    <img className={style.iconxs} src={IconGreen} alt="dot" />
                    <img className={style.iconxs} src={Icon6} alt="Figma" />
                    <img className={style.iconxs} src={IconGreen} alt="dot" />
                    <img className={style.iconxs} src={Icon7} alt="Git" />
                    <img className={style.iconxs} src={IconGreen} alt="dot" />
                    <img className={style.iconxs} src={Icon10} alt="JavaScript" />
                </div>
                </div>

                <div className="flex flex-row justify-center gap-28 flex-wrap">

                    <div className={style.iconcontainer}>
                        <img className={style.iconbig} src={Icon10} alt="JavaScript" />
                        <p>JavaScript</p>
                    </div>

                    <div className={style.iconcontainer}>

                        <img className={style.iconbig} src={Icon11} alt="MongoDB" />
                        <p>MongoDB</p>
                    </div>

                    <div className={style.iconcontainer}>
                        <img className={style.iconbig} src={Icon13} alt="React" />
                        <p>React</p>
                    </div>

                    <div className={style.iconcontainer}>
                        <img className={style.iconbig} src={Icon12} alt="Node.js" />
                        <p>Node.js</p>
                    </div>

                    <div className={style.iconcontainer}>
                        <img className={style.iconbig} src={Icon8} alt="HTML" />
                        <p>HTML</p>
                    </div>

                    <div className={style.iconcontainer}>
                        <img className={style.iconbig} src={Icon4} alt="CSS" />
                        <p>CSS</p>
                    </div>

                    <div className={style.iconcontainer}>
                        <img className={style.iconbig} src={Icon7} alt="Git" />
                        <p>Git</p>
                    </div>

                    <div className={style.iconcontainer}>
                        <img className={style.iconbig} src={Icon5} alt="Express" />
                        <p>Express</p>
                    </div>

                    <div className={style.iconcontainer}>
                        <img className={style.iconbig} src={Icon9} alt="Insomnia" />
                        <p>Insomnia</p>
                    </div>

                    <div className={style.iconcontainer}>
                        <img className={style.iconbig} src={Icon6} alt="Figma" />
                        <p>Figma</p>
                    </div>

                    <div className={style.iconcontainer}>
                        <img className={style.iconbig} src={Icon1} alt="Illustrator" />
                        <p>Illustrator</p>
                    </div>

                    <div className={style.iconcontainer}>
                        <img className={style.iconbig} src={Icon3} alt="Photoshop" />
                        <p>Photoshop</p>
                    </div>

                    <div className={style.iconcontainer}>
                        <img className={style.iconbig} src={Icon2} alt="InDesign" />
                        <p>InDesign</p>
                    </div>

                    <div className={style.iconcontainer}>
                        <img className={style.iconbig} src={Icon14} alt="WordPress" />
                        <p>WordPress</p>
                    </div>
                </div>

            </div>



        </>
    );
}
