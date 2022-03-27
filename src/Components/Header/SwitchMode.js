import {RiMoonFill} from 'react-icons/ri'
import {BsFillSunFill} from 'react-icons/bs'
import { useRef ,useState, useEffect, useContext} from 'react';
import styles from './SwitchStyle.module.scss'
import {ThemeContext} from '../ThemeContext/themeContext'




function SwitchMode() {
    const themeContext =useContext(ThemeContext);
    const refInput= useRef();
    const refToggle = useRef();
    const refCircle = useRef();
    const [isDark,setIsDark] = useState();

    const handleToggle=() => {
        refInput.current.checked = !refInput.current.checked
        setIsDark(refInput.current.checked);
        themeContext.toggleTheme()
    }

    useEffect(()=>{
        refInput.current.checked=isDark;
        const changeBackgroundButton =()=>{
            if(isDark){
                refCircle.current.style.background='#222';
                refToggle.current.style.background='#fff';
            }else {
                refCircle.current.style.background='#fff';
                refToggle.current.style.background='var(--ToggleButtonBackground)';

            }
        }
        changeBackgroundButton();
        document.addEventListener('resize',changeBackgroundButton);
        return ()=>{
        document.removeEventListener('resize',changeBackgroundButton);

        }

    },[isDark])

    return (
        <div className={styles.toggleButton} ref={refToggle} onClick={handleToggle}>
            <input type="checkbox" className={styles.Input} ref={refInput}/>
            <div className={styles.Icon}>
                {(isDark)? <RiMoonFill/> : <BsFillSunFill/>}
                
            </div>
            <div className={styles.Cricle} ref={refCircle}></div>
        </div>
    )
}

export default SwitchMode;