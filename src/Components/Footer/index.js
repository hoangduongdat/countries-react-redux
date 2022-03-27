import styled from 'styled-components'
import { ThemeContext } from './../ThemeContext/themeContext';
import { useContext } from 'react';
function Footer (){
    const themeContext=useContext(ThemeContext)
    return(
        <FooterContainer className={themeContext.theme}>
            <h4>Copyright &copy; Dat Hoang</h4>
            <span>hoangdat282@gmail.comn</span>
        </FooterContainer>
    )

}
export default Footer

const FooterContainer= styled.div`
    width: 100%;
    height: 8vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    left:0;
    right: 0;
    bottom:0;
   
`