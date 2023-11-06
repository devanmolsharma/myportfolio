import IconButton from './IconButton';
import './NavBar.css'
import SearchBar from './SearchBar';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useEffect, useState } from "react";
import search from "../Utility/search";

function NavBar(params) {
    useEffect(()=>{
        document.getElementsByClassName('navigation')[0].style.paddingLeft = '0px';
    })

    const [showResume, setResumeVisible] = useState(false);
    let expanded = false;


    function handleonClick() {
        let button = document.getElementsByClassName("resumeButton")[0];
        if (!expanded) {
            if (button.classList.length === 1) {
                button.classList.add("clicked");
                setResumeVisible(true);
                expanded = true;
            }
        }
    }

    function handleonClickOut() {
        let button = document.getElementsByClassName("clicked")[0];
        button.classList.remove("clicked");
        button.classList.remove("clicked");
        console.log(button.classList);
        setResumeVisible(false);
    }
    return (
        <nav className='navigation' style={params.style ?? {}}>
            <IconButton className='TopCamera' icon={GiHamburgerMenu} onClick={() => { params.toggler((!params.short)) }} />


            &nbsp;&nbsp;
            <div className="Spacer"></div>
            {(params.width
                > 500) && <div className='Spacer' ></div>
            }

            {params.showSearchbar && <> <div className='searchBar'><SearchBar projects={params.projects} setProjects={params.setProjects}  search = {search} className="searchInput" placeholder="Search" />
                {/* <IconButton className='Mike' icon={MdKeyboardVoice} /> */}
                </div>
            {(params.width > 500) && <div className='Spacer'></div>
            }</>}

        </nav>
    );
}

export default NavBar;