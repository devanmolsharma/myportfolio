import './ProjectDialog.css'
import { GiCrossMark } from 'react-icons/gi';
import Comments from './Comments';


function ProjectDialog(params) {
    return (<div className='projectDialog'>
        <div className='project'>
            <div style={{ backgroundImage: `url(${params.project.thumbnailUrl})` }} className='thumbnail'></div>
            <div className='description'>{params.project.description}</div></div>
        <div className='thingsLearnt'>
            <div className="thingsLearntTitle">What I Learned</div>
            {
            params.project.thingsLearnt.map((e) => { return <div className='learntThing'>{e}</div> })
            }
        </div>
        <Comments className='dialogComments' comments={params.project.comments}/>
        <GiCrossMark className='exitIcon' onClick={() => { params.onExit(); }}></GiCrossMark>


    </div>)
}

export default ProjectDialog;