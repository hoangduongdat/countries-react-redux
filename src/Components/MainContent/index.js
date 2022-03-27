
// import {useContext} from 'react'
// import {ThemeContext} from '../ThemeContext/themeContext'

import SearchAndFilter from './SearchAndFilter'
import Countries from './Countries';



function MainContent() {
    
    return (
        <div>
            <SearchAndFilter/>
            <Countries/>
        </div>
    )
}

export default MainContent;