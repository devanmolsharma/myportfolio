import { SiAboutdotme } from "react-icons/si"; 
import { GiMagicAxe } from "react-icons/gi"; 
import SideButton from './SideButton';
import './Sidebar.css';
import { GiAerialSignal, GiClothes, GiCryoChamber, GiFilmProjector, GiFireGem, GiHelp, GiKidSlide, GiLightBulb, GiMusicSpell, GiMusicalNotes, GiNewspaper, GiShorts, GiSportMedal, GiTv, GiWatch } from 'react-icons/gi';
import { AiFillAlert, AiFillBook, AiFillFlag, AiFillSetting, AiFillYoutube, AiOutlineArrowDown, AiOutlineHistory, AiOutlineLike, AiOutlineVideoCamera, AiTwotoneHome } from 'react-icons/ai';
import ImageButton from '../Content/ImageButton';


function SideBar(params) {



    let mainTabs = [[SiAboutdotme, 'About Me'],
    [GiMagicAxe, 'Projects'],
    // [GiTv, 'Subscriptions']
];



    if (!params.short)
        return (<aside style={{
            height: params.height * 0.9 + 'px',
            position: (params.width > 1200) ? 'static' : 'fixed',
            width:  !params.short?"300px":"100px",
            // backgroundColor:  !params.short?"black":"transparent",
            ...params.style
        }}>
            {mainTabs.map((item, i) => {
                return <SideButton exitFun = {params.exitFun} icon={item[0]} text={item[1]} short={params.short} toggler={params.toggler}/>
            })}
        </aside>)
    else
        return (<aside style={{
            height: params.height * 0.9 + 'px',
            width: "80px",
            backgroundColor:  "transparent",
            backdropFilter:"none",
            ...params.style
        }}>
            {mainTabs.map((item, i) => {
                return <SideButton exitFun = {params.exitFun} icon={item[0]} text={item[1]} short={params.short} toggler={params.toggler} />
            })}
        </aside>);
}

export default SideBar;