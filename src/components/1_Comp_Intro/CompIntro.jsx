
import style from './CompIntro.module.css';
import LocationIcon from '../../assets/Vector.svg';
import imgPortrait from '../../assets/intro_img/portrait5.png'


import { Reveal } from "../ui/Reveal"


export const CompIntro = (props) => {

    const { onFormVisible } = props;

    return (
        <>
            <div className={style.container}>

                <div className={`flex items-center ${style.intro}`}>

                    <div className={`flex flex-col gap-12 ${style.textbox}`}>
                        <h5 className={style.introSmall}><span className={style.regular}>Hello! I’m</span> Sara Pena</h5>
                        <h1 className={style.introTitle}>Full-stack <span className='green'>developer</span> with a <span className='green'>design</span> background </h1>
                        <h5 className={`${style.introSmall} ${style.regular}`}>Building user-centric applications in React, Node.js, and MongoDB. </h5>
                    </div>
                    <div className={style.containerPortrait}>
                        <div className={style.bgPortrait}>
                            <img className={style.portrait} src={imgPortrait} alt="" />
                        </div>

                    </div>
                </div>



                <div className={style.callContainer}>
                    <div className='flex flex-row gap-8 items-center'>
                        <img className={style.icon} src={LocationIcon} alt="Icon location" />
                        <p className='gray'>Based in Brussels</p>
                    </div>

                    <div className={style.line}></div>
                    <button onClick={() => onFormVisible()} className='btn-prin'>Let's Talk</button>
                </div>


            </div>


        </>
    );
}
