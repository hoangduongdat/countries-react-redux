import styled from 'styled-components'
import SwitchMode from './SwitchMode'
import { useContext } from 'react';
import {ThemeContext } from '../ThemeContext/themeContext';
import { Link } from 'react-router-dom';

function Header () {
    const themeContext= useContext(ThemeContext)

    return (
        <HeaderPane className={themeContext.theme}>
            <Link to='/'>
                <span> Where in the World?</span>
            </Link>
            <SwitchMode/>
        </HeaderPane>
    )
}

export default Header;

const HeaderPane = styled.div`
    height: 8vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 40px;
    box-shadow: var(--BoxShadow); 
    z-index: 1000;

    span {
        font-size: 24px;
        font-weight: bold;
        text-shadow: 2px 3px 3px rgba(0, 0, 0, 0.3)
        cursor: pointer;
        user-select: none;
    }
`