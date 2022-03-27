import styled from 'styled-components'
import Search from './Search'
import Filter from './Filter'


function SearchAndFilter() {
    
    return (
        <SearchAndFilterPane>
            <Search/>
            <Filter/>
        </SearchAndFilterPane>
    )
}

export default SearchAndFilter;

const SearchAndFilterPane= styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
`