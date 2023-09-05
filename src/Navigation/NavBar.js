import { AiFillBook } from "react-icons/ai";
import IconButton from './IconButton';
import './NavBar.css'
import SearchBar from './SearchBar';
import { MdKeyboardVoice } from 'react-icons/md'
import { SlCamrecorder } from 'react-icons/sl';
import { FaRegBell } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import ImageButton from '../Content/ImageButton';
import ResumeDialog from "../Dialogs/ResumeDialog";
import { useState } from "react";
import search from "../Utility/search";

function NavBar(params) {

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
            <div className="resumeButton" onClick={handleonClick}>
                <AiFillBook className="book" />
                &nbsp;<b>Contact </b>
                <button className="resumeClose" onClick={handleonClickOut}>x</button>
                {showResume && <ResumeDialog className="resumeDialog" />}
            </div>
            <div className="Spacer"></div>
            {(params.width
                > 500) && <div className='Spacer' ></div>
            }

            {params.showSearchbar && <> <div className='searchBar'><SearchBar projects={params.projects} setProjects={params.setProjects}  search = {search} className="searchInput" placeholder="Search" />
                <IconButton className='Mike' icon={MdKeyboardVoice} /></div>
            {(params.width > 500) && <div className='Spacer'></div>
            }</>}

        </nav>
    );
}

export default NavBar;