import ImageButton from './ImageButton';
import './VideoBox.css';

function VideoBox(params) {

    return (<div className='videoBox' key={params.id} id={params.id}><a onClick={() => (params.handleVideoClick(params.id))} href={params.url}>
        <div style={{ backgroundImage: `url(${params.thumbnailUrl})` }} className='VideoThumbnail' />
        <div className='videoDesctiption'>
            <b>{params.title} <br /></b>
            <ImageButton className='channelIcon' src='https://yt3.ggpht.com/ebfeiKYNNNKOGzQCK8pB-TCJ666RV1PlRG1Wyx41Gdmd7465lJL_-Kew2Xl5no2ug_fCmLAvCBk=s88-c-k-c0x00ffffff-no-rj-mo' />&nbsp;&nbsp;&nbsp;<i>{params.channel}<br /></i>
            <i> {params.views} views </i>●
            <i>Started in {params.uploadDate}<br /></i>
        </div>
    </a></div>);
}

export default VideoBox;