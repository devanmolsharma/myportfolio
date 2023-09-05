import { useState } from 'react';
import './TagsList.css';

const TagsList = (params) => {
    const [selecteditem,select] = useState(0);
    function handleClick(tag,i){
        select(i);
        params.onSelected(tag,i);
    }
    return (<div className='tags'><div className='tagsList'>
        {(params.tags??[]).map((tag,i) => { return (<div onClick={()=>{handleClick(tag,i);}} className='tag' current={i==selecteditem?'true':'false'}>&nbsp;&nbsp;&nbsp;{tag}&nbsp;&nbsp;&nbsp;</div>) })}
    </div></div>);
};

export default TagsList;