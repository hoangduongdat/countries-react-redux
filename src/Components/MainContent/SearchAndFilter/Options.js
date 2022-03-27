import {FaGlobeAfrica,FaGlobeAmericas,FaGlobeAsia,FaGlobeEurope} from 'react-icons/fa'
import {GiWorld,GiEarthAsiaOceania} from 'react-icons/gi'
import styled from 'styled-components'
import Option from './Option'
import { ThemeContext } from './../../ThemeContext/themeContext';
import { useContext } from 'react';
 const RegionList = [
     {icon: GiWorld, value: 'All'},
     {icon: FaGlobeAfrica, value: 'Africa'},
     {icon: FaGlobeAmericas, value: 'Americas'},
     {icon: FaGlobeAsia, value: 'Asia'},
     {icon: FaGlobeEurope, value: 'Europe'},
     {icon: GiEarthAsiaOceania, value: 'Oceania'}
 ]

function Options() {
    const themeContext=useContext(ThemeContext)
    return (
        <OptionPane className={themeContext.theme}> 
            {RegionList.map((region,index)=>{
                return <Option region={region} key={index}/>
            })}
        </OptionPane>
    )
}

export default Options;


const OptionPane= styled.ul`
    width: 100%;
    z-index: 999;
    border-radius: 4px;
    position:absolute;
    overflow: hidden;
    z-index: 10;
    box-shadow: var(--BoxShadow)  
`;

