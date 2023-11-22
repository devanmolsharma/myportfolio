import { useState } from 'react';
import './SearchBar.css';
import { AiOutlineSearch } from "react-icons/ai"

function SearchBar(props) {
    const [visibility, setStyle] = useState('hidden');
    let changeStyle = () => {
        setStyle(visibility == 'hidden' ? 'visible' : 'hidden');
    };

    return (<div className={`SearchBase ${props.className ?? ''}`}>
        <form action="">
            <input onChange={(e) => {
                props.search(props.projects, e.target.value, props.setProjects);
                setTimeout(() => {
                    let items = document.querySelectorAll('.content>*:not(.background)');
                    for (let index = 0; index < items.length; index++) {
                        if (items[index].classList) {
                            items[index].style.transition = `${0.3 + (0.2 * index)}s`
                            items[index].style.opacity = 1;
                        }
                    }
                }, 1000);
            }} type="search" required />
            <i class="fa fa-search"></i>
        </form></div>);

}

export default SearchBar; 