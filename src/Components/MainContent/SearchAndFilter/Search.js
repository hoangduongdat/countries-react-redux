import { useState } from 'react';
import {MdSearch} from 'react-icons/md'
import { useNavigate, Link } from 'react-router-dom';
import styled from 'styled-components'
function Search (){
    const [valueInput,setValueInput] = useState('')
    const navigate = useNavigate()
    const handleKeyDown = (e) =>{
        if(e.keyCode===13) {
            if(valueInput!=='') {
                navigate(`/search/${valueInput}`)
            }
            else {
                navigate('/')
            }
        }
    }
    return(
        <SearchPain>
            <h3>Search Country</h3>
            <SearchElement>
                <input 
                    type="text" 
                    placeholder="Input the and enter to search..."
                    onChange ={ e=> setValueInput(e.target.value)}
                    value={valueInput}
                    onKeyDown={handleKeyDown}
                />
                <Link to= {valueInput!=='' ? `/search/${valueInput}` : '/'}  style={{width:'40px', height:'100%'}}>
                    <div><MdSearch className="icon"/></div>
                </Link>
            </SearchElement>
        </SearchPain>
    )
}

export default Search;

const SearchPain = styled.div`
    max-width: 320px;
    width: 100%;
    margin-top: 20px;

    h3 {
        font-size: 18px;
        font-weight: 600;
        text-shadow: var(--TextShadow)
    }
`

const SearchElement= styled.div`
    margin-top: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 34px;
    box-shadow: var(--BoxShadow);
    border-radius: 4px;
    overflow: hidden;

    input {
        border: 0;
        outline: none;
        width: 100%;
        font-size: 18px;
        font-weight: 500;
        height: 100%;
        padding: 0 4px;
    }

    .icon {
        height: 100%;
        width: 100%;
        padding: 2px;
        text-align: center;
        background : #aaa; !important;
        box-shadow: none !important;
        opacity: 75%;import { useState } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

        transition: opacity 0.2s linear;
        &:hover {
            opacity: 1;
            cursor: pointer;
        } 
    }
`