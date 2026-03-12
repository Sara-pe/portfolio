
import style from './CompIntro.module.css';
import LocationIcon from '../../assets/Vector.svg';
import imgPortrait from '../../assets/intro_img/portrait.png'


import { Reveal } from "../ui/Reveal"


export const CompIntro = (props) => {

    const { onFormVisible } = props;

    return (
        <>
            <div className={style.container}>
              
                    <div className={`flex justify-center items-center ${style.intro}`}>
                        
                        <div className={`flex flex-col gap-12 ${style.textbox}`}>
                          <div className={style.tag}> <p>I am available! ✨</p></div> 
                           <h1>Hello! 👋 I’m <br />
                                Sara Pena</h1>
                            <h5 className='gray'>Full-stack developer with a design background, building user-centric applications in React, Node.js, and MongoDB. </h5>
                        </div>
                        <div className={style.containerPortrait}>
                            <img className={style.portrait} src={imgPortrait} alt="" />
                        </div>
                    </div>
               

                <Reveal>
                    <div className='flex flex-row justify-btw items-center flex-col-md gap-20-md'>
                        <div className='flex flex-row gap-8 items-center'>
                            <img className={style.icon} src={LocationIcon} alt="Icon location" />
                            <p className='gray'>Based in Brussels</p>
                        </div>

                        <div className='line'></div>
                        <button onClick={() => onFormVisible()} className='btn-prin'>Let's Talk</button>
                    </div>
                    </Reveal>
           
            </div>


        </>
    );
}
