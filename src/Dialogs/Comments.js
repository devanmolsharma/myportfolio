import './Comments.css';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { useEffect } from 'react';
function Comments(params) {

    useEffect(() => {
        document.getElementsByClassName("commentsBox")[0].scrollBy(0,-1000);
        
    }, [])
    
    return (<div className={'comments ' + (params.className ?? "")}>
        <div className='commentsBox'>
            {params.comments.map((comment) => {
                return <div className='comment'>
                    <div className='commentorName'>{comment.name}</div>
                    <div className='commentDate'>{comment.date}</div>
                    {comment.comment}
                </div>
            })}
        </div>
        <input type='text' placeholder='Enter your name' className='nameBox' />
        <input type='text' placeholder='Comment here!' className='addCommentBox' /><AiOutlineArrowRight className='submitButton' onClick={() => {
            let namebox = document.getElementsByClassName("nameBox")[0];
            let commentBox = document.getElementsByClassName("addCommentBox")[0];
            params.onNewComment(namebox.value, commentBox.value);
            namebox.value = "";
            commentBox.value = "";
            setTimeout((() => { document.getElementsByClassName("commentsBox")[0].scrollBy(0,-200) }), 300);
        }} />

    </div>)
}

export default Comments;