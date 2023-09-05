import './IconButton.css';

function IconButton(params) {
    return <div onClick={params.onClick} style={params.style??{}} className={`iconbg ${params.className ?? ""}`}><params.icon size="23px" className={`icon ${params.class}`} /></div>
}

export default IconButton;