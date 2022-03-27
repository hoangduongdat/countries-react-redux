import styled from 'styled-components'
import {useNavigate} from 'react-router-dom'

function Option(props) {
    const {region} =props;
    const navigate =  useNavigate();
    const handleValueOption = (e) =>{
        if(region.value !== 'All'){
            navigate(`/region/${region.value}`);
        } else {
            navigate(`/`);
        }
    }

    return(
        <OptionItem onClick={handleValueOption}>
            <region.icon/>
            <span>{region.value}</span>
        </OptionItem>
    )
}

export default Option;

const OptionItem = styled.li`
    padding: 2px 8px;
    font-size: 18px;
    font-weight: 500;
    cursor: pointer;
    &:hover {
        font-weight: bold;
        background: var(--SelectOptionBackground);
    }

    span {
        margin-left: 4px;
    }
`