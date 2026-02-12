
import style from './CompIntro.module.css';
import LocationIcon from '../../assets/Vector.svg';

export const CompIntro = (props) => {

const { onFormVisible } = props;

    return (
        <>
            <div className={style.container}>
                <div className={`flex justify-center items-center ${style.intro}`}>
                <div className={`flex flex-col gap-12 ${style.textbox}`}>
                    <h1>Hello! 👋 I’m <br />
                        Sara Pena</h1>
                    <h4 className='gray'>Full-stack developer with a design background, building UX-focused applications in React, Node.js, and MongoDB. </h4>
                </div>
                </div>

                <div className='flex flex-row justify-btw items-center'>
                    <div className='flex flex-row gap-8 items-center'>
                        <img src={LocationIcon} alt="Icon location" />
                        <p className='gray'>Based in Brussels</p>
                    </div>

                    <div className='line'></div>
                    <button onClick={()=>onFormVisible()} className='btn-prin'>Let's Talk</button>
                </div>
            </div>


        </>
    );
}
