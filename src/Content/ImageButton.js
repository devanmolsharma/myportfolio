import './ImageButton.css'

function ImageButton(params) {
    return <div onClick={params.onClick} style={params.style??{}} className={`imgbg ${params.className ?? ""}`}><img src={params.src} size="23px" className={`buttonImage ${params.class}`} /></div>
}

export default ImageButton;