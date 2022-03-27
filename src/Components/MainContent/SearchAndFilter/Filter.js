import { useContext,useEffect,useRef,useState  } from 'react'
import {FaChevronDown} from 'react-icons/fa'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import {ThemeContext} from '../../ThemeContext/themeContext'
import Options from './Options'

function Filter (){
    const themeContext=useContext(ThemeContext)

    const [isShowOption,setIsShowOption] = useState(false)
    const refSelect = useRef(null)
    const {regionName} = useParams()
    const [valueOption,setValueOption] = useState('All')

    const handleOptions=(e) =>{
        if(refSelect.current) {
            setIsShowOption(refSelect.current.contains(e.target))
        }
    }
    useEffect(() =>{ 
        document.addEventListener('click',handleOptions)
        return ()=>{
            document.removeEventListener('click',handleOptions)
        }
    },[isShowOption])


    useEffect(() =>{
        if(regionName) setValueOption(regionName)
        else setValueOption('All')
    },[regionName])
    return(
        <FilterPane>
            <h3>Filter by regions</h3>
            <div>
                <SelectPane>
                    <Select className={themeContext.theme} ref={refSelect} onClick={handleOptions}>
                        <span>{valueOption}</span>
                        <FaChevronDown/>
                    </Select>
                    {isShowOption && <Options/>}
                </SelectPane>
            </div>
        </FilterPane>
    )
}

export default Filter;

const FilterPane = styled.div`
    max-width: 160px;
    width: 100%;
    

    h3 {
        font-size: 18px;
        font-weight:600;
        text-shadow: var(--TextShadow);
        
    }
`;

const SelectPane= styled.div`
    width: 100%;
    margin-top: 8px;
    position: relative;   
`;

const Select = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 8px;

    span{
        font-size: 18px;
        font-weight: bold;
        user-select: none;
    }
    
`;

