import React, { useEffect } from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import './Comments.css'; // Keep this if you have additional custom styles

function Comments(params) {
    useEffect(() => {
        document.querySelector(".comments-box").scrollBy(0, -1000);
    }, []);

    return (
        <div className={`comments ${params.className ?? ""}`}>
            <h2 className='mb-1'>Comments</h2>
            <div className='comments-box overflow-auto p-3 mb-3 bg-light rounded'>
                {params.comments.map((comment, index) => (
                    <div key={index} className='mb-2'>
                        <div className='fw-bold'>{comment.name}</div>
                        <div className='text-muted'>{comment.date}</div>
                        <p>{comment.comment}</p>
                    </div>
                ))}
            </div>
            <div className='input-group mb-3'>
                <input type='text' className='form-control' placeholder='Enter your name' aria-label="Recipient's name" />
                <input type='text' className='form-control' placeholder='Comment here!' aria-label="Comment" />
                <button className='btn btn-outline-secondary' type='button' onClick={() => {
                    let nameBox = document.querySelector(".nameBox");
                    let commentBox = document.querySelector(".addCommentBox");
                    params.onNewComment(nameBox.value, commentBox.value);
                    nameBox.value = "";
                    commentBox.value = "";
                    setTimeout(() => { document.querySelector(".comments-box").scrollBy(0, -200); }, 300);
                }}>
                    <AiOutlineArrowRight />
                </button>
            </div>
        </div>
    );
}

export default Comments;
