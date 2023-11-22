import ImageButton from './ImageButton';
import './VideoBox.css';

function VideoBox(params) {

    return (<div className="nft" onClick={() => (params.handleVideoClick(params.id))}>
        <div class='main'>
            <img class='tokenImage' src={params.thumbnailUrl} alt="background" />
            <h2>{params.title}</h2>
            <p class='description'>{params.title}.</p>
            <div class='tokenInfo'>
                <div class="price">
                    <p>{params.views} views</p>
                </div>
                <div class="duration">
                    <ins>◷</ins>
                    <p>{params.uploadDate}</p>
                </div>
            </div>
            <hr />
            <div class='creator'>
                <div class='wrapper'>
                    <img src="https://yt3.ggpht.com/ebfeiKYNNNKOGzQCK8pB-TCJ666RV1PlRG1Wyx41Gdmd7465lJL_-Kew2Xl5no2ug_fCmLAvCBk=s88-c-k-c0x00ffffff-no-rj-mo" alt="Creator" />
                </div>
                <p><ins>Creation of</ins> Anmol Sharma</p>
            </div>

        </div>
    </div>);
}

export default VideoBox;