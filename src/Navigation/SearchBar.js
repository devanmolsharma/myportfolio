import { useState } from 'react';
import './SearchBar.css';
import { AiOutlineSearch } from "react-icons/ai"

function SearchBar(props) {
    const [visibility, setStyle] = useState('hidden');
    let changeStyle = () => {
        setStyle(visibility == 'hidden' ? 'visible' : 'hidden');
    };

    return (
        <div className={`SearchBase ${props.className??''}`} >
            <AiOutlineSearch style={{ 'visibility': visibility }} className='beforeImage' src='search.png' />
            <input onChange={(x)=>props.search(props.projects,x,props.setProjects)} className="search" onFocus={changeStyle} onBlur={changeStyle} placeholder={"   " + props.placeholder} />
            <button alt='search' className='searchwithIcon'><AiOutlineSearch className='SearchIcon' /></button>
        </div>);
}

export default SearchBar; 