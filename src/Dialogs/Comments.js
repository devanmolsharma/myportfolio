import './Comments.css';
import { AiOutlineArrowRight } from 'react-icons/ai';
function Comments(params) {
    return (<div className={'comments ' + (params.className ?? "")}>
        <div className='commentsBox'>
           {params.comments.map((comment)=>{return <div className='comment'>
                <div className='commentorName'>{comment.name}</div>
                <div className='commentDate'>{comment.date}</div>
                {comment.comment}
            </div>})}
        </div>
        <input type='text' placeholder='Enter your name' className='nameBox' />
        <input type='text' placeholder='Comment here!' className='addCommentBox' /><AiOutlineArrowRight className='submitButton' />

    </div>)
}

export default Comments;