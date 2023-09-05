import { Link } from 'react-router-dom';
import './SideButton.css'

function SideButton(params) {
    return (<Link className='btnLink' to={"/" + params.text.replace(" ", "_")} ><div onClick={() => params.toggler(true)} className='buttonDiv' style={{ flexDirection: params.short ? "column" : "row", width: params.short ? "70%" : "90%", backgroundColor: window.location.href.includes(params.text.replace(" ", "_")) ? "rgba(255, 255, 255, 0.1)" : "none" }}>
        {<params.icon src="https://yt3.ggpht.com/ebfeiKYNNNKOGzQCK8pB-TCJ666RV1PlRG1Wyx41Gdmd7465lJL_-Kew2Xl5no2ug_fCmLAvCBk=s88-c-k-c0x00ffffff-no-rj-mo" style={{ fontSize: params.short ? "2em" : "1em" }} className="Sideicon" />}
        <b style={{ fontSize: params.short ? "0.6em" : "1em" }}>{params.text} </b></div></Link>)
}

export default SideButton;