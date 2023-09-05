import SideButton from './SideButton';
import './Sidebar.css';
import { GiAerialSignal, GiClothes, GiCryoChamber, GiFilmProjector, GiFireGem, GiHelp, GiKidSlide, GiLightBulb, GiMusicSpell, GiMusicalNotes, GiNewspaper, GiShorts, GiSportMedal, GiTv, GiWatch } from 'react-icons/gi';
import { AiFillAlert, AiFillBook, AiFillFlag, AiFillSetting, AiFillYoutube, AiOutlineArrowDown, AiOutlineHistory, AiOutlineLike, AiOutlineVideoCamera, AiTwotoneHome } from 'react-icons/ai';
import ImageButton from '../Content/ImageButton';


function SideBar(params) {



    let mainTabs = [[ImageButton, 'About Me'],
    [GiShorts, 'Projects'],
    [GiTv, 'Subscriptions']];


    let additionalTabs = [[AiFillBook, 'Library'],
    [AiOutlineHistory, 'History'],
    [AiOutlineVideoCamera, 'Your Videos'],
    [GiWatch, 'Watch Later'],
    [AiOutlineLike, 'Liked Videos'],
    [AiOutlineArrowDown, 'Show More'],
    ];

    let subscriptionTabs = [[GiCryoChamber, 'Channel1'],
    [GiCryoChamber, 'Channel2'],
    [GiCryoChamber, 'Channel3'],
    [GiCryoChamber, 'Channel4'],
    [GiCryoChamber, 'Channel5'],
    [GiCryoChamber, 'Channel6'],
    [GiCryoChamber, 'Show 38 More'],
    ];

    let otherServices = [
        [AiFillYoutube, 'MeTube Premium'],
        [GiFilmProjector, 'MeTube Studio'],
        [GiMusicSpell, 'MeTube Music'],
        [GiKidSlide, 'MeTube Kids'],
    ];

    let exploreTabs = [[GiFireGem, 'Trending'],
    [GiMusicalNotes, 'Music'],
    [GiFilmProjector, 'Movies & TV'],
    [GiAerialSignal, 'Live'],
    [GiNewspaper, 'News'],
    [GiSportMedal, 'Sport'],
    [GiLightBulb, 'Learning'],
    [GiClothes, 'Fashion and Beauty'],
    ];

    let configTabs = [
        [AiFillSetting, 'Settings'],
        [AiFillFlag, 'Report History'],
        [GiHelp, 'Help'],
        [AiFillAlert, 'Send feedback'],
    ];

    if (!params.short)
        return (<aside style={{
            height: params.height * 0.9 + 'px',
            position: (params.width > 1200) ? 'static' : 'fixed',
            width:  !params.short?"300px":"100px",
            ...params.style
        }}>
            {mainTabs.map((item, i) => {
                return <SideButton icon={item[0]} text={item[1]} short={params.short} toggler={params.toggler}/>
            })}
            <hr />
            {additionalTabs.map((item, i) => {
                return <SideButton icon={item[0]} text={item[1]} short={params.short} toggler={params.toggler}/>
            })}
            <hr />
            <b>Subscriptions</b>
            {subscriptionTabs.map((item, i) => {
                return <SideButton icon={item[0]} text={item[1]} short={params.short} toggler={params.toggler}/>
            })}

            <hr />
            <b>Explore</b>
            {exploreTabs.map((item, i) => {
                return <SideButton icon={item[0]} text={item[1]} short={params.short} toggler={params.toggler}/>
            })}

            <hr />
            <b>More from MeTube</b>
            {otherServices.map((item, i) => {
                return <SideButton icon={item[0]} text={item[1]} short={params.short} toggler={params.toggler}/>
            })}

            <hr />
            {configTabs.map((item, i) => {
                return <SideButton icon={item[0]} text={item[1]} short={params.short} toggler={params.toggler}/>
            })}
        </aside>)
    else
        return (<aside style={{
            height: params.height * 0.9 + 'px',
            width: "80px",
            ...params.style
        }}>
            {mainTabs.map((item, i) => {
                return <SideButton icon={item[0]} text={item[1]} short={params.short} toggler={params.toggler} />
            })}
        </aside>);
}

export default SideBar;