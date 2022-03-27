import './App.css';
import styled from 'styled-components';
import Header from './Components/Header'; 
import MainContent from './Components/MainContent/index'
import {useContext} from 'react'
import {ThemeContext} from './Components/ThemeContext/themeContext'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import FooterContainer from './Components/Footer/'
import CountryDetail from './Components/MainContent/CountryDetail/index';



function App() {
  const themeContext=useContext(ThemeContext);
  return (
    <AppContainer  className={themeContext.theme}>
      <Router>
        <Header/>
        <ContentContainer>
          <Routes>
            <Route exact path='/' element={<MainContent/>}/>
            <Route path='/region/:regionName' element={<MainContent/>}/>
            <Route path='/search/:name' element={<MainContent/>}/>
            <Route path='/country/:countryName' element={<CountryDetail/>}/>
          </Routes>       
        </ContentContainer>
        <FooterContainer/>
      </Router>
    </AppContainer>
  );
}

export default App;


const AppContainer= styled.div`
  width: 100%;
  overflow: hidden;
  height: 100vh;
`
const ContentContainer=styled.div`
  max-width: 1280px;
  display: block;
  margin: 0 auto;
  width: 100%;
  padding: 0 12px;
`