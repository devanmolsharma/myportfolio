import { RxCross2 } from "react-icons/rx"; 
import './ProjectDialog.css'
import Comments from './Comments';
import { useEffect } from 'react';


function ProjectDialog(params) {
    useEffect(() => {
        let dialog = document.getElementsByClassName("projectDialog")[0];
        dialog.style.width = '100%'
        dialog.style.height = '100%'
    }, [])
    return (<div className='projectDialog'>
        <div className='exit'><RxCross2 className='exitIcon' onClick={() => {
            let dialog = document.getElementsByClassName("projectDialog")[0];
            dialog.style.width = '0%'
            dialog.style.height = '0%'
            setTimeout(() => { params.onExit(); }, 500)
        }}></RxCross2></div>
        <div className='project'>
            <div style={{ backgroundImage: `url(${params.project.thumbnailUrl})` }} className='thumbnail'></div>
            <div className='description'>{params.project.description}</div></div>
        <div className='thingsLearnt'>
            <div className="thingsLearntTitle">What I Learned</div>
            {
                params.project.thingsLearnt.map((e) => { return <div className='learntThing'>{e}</div> })
            }
        </div>
        <Comments className='dialogComments' comments={params.project.comments} onNewComment={(name, comment) => { params.handleComment(params.id, name, comment); }} />


    </div>)
}

export default ProjectDialog;