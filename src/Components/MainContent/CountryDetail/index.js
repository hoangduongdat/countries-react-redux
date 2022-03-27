
import  styled  from 'styled-components';
import { useContext, useEffect } from 'react';
import { ThemeContext } from './../../ThemeContext/themeContext';
import CountryInfo from './CountryInfo'
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {getCountryByName} from '../../Store/Actions/CountriesAction'
import { useSelector } from 'react-redux';
import Loading from './../../Loading/Loading';

function CountryDetail () {
    const themeContext=useContext(ThemeContext)
    const slug =useParams();
    const navigate= useNavigate();
    const dispatch= useDispatch();
    const loading= useSelector(state => state.Countries.loading)
    const country= useSelector(state => state.Countries.country)

    useEffect(() =>{
        dispatch(getCountryByName(slug.countryName))
    },[slug.countryName, dispatch])

    return (
        <>
         {
            loading ? (<Loading/>) :
            (<Wrapper >
                <div className={`goback-btn ${themeContext.theme}`} onClick={()=>navigate(-1)}>Go back</div>
                <CountryContainer>
                    <div className="flag-country">
                        <img src={country ? country.flag : 'https://via.placeholder.com/300x200?text=Image + error' } alt="" />
                    </div>
                    <CountryInfo/>
                </CountryContainer>
            </Wrapper>
            )                          
         }
        </>  
        
    )
}

export default CountryDetail;

const Wrapper = styled.div`
    padding-top: 20px;
    height: 84vh;
    .goback-btn {
        display: block;
        width: 80px;
        height: 28px;
        line-height: 28px;
        border-radius: 4px;
        text-align: center;
        font-weight: 500;
        filter: brightness(0.9);
        transition : all 0.2s linear;
        &:hover {
            filter: brightness(1);
            font-weight: bold;
            cursor: default;
            user-select: none;
        }
    }
`
const CountryContainer= styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 30px;

    @media only screen and (max-width: 800px) {
        flex-direction: column;
        align-items: center;
    }

    .flag-country{
        max-width: 400px;
        width: 100%;
        height: 100%;
        margin-bottom: 12px;
        box-shadow: var(--BoxShadow);

        img {
            width: 100%;
            height: 100%;
        }
    }
`