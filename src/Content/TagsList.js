import { useState } from 'react';
import './TagsList.css';

const TagsList = (params) => {
    const [selecteditem,select] = useState(0);
    function handleClick(tag,i,event){
        select(i);
        params.search(params.projects,tag,params.changer)
        params.onSelected(tag,i);
    }
    return (<div className='tags'><div className='tagsList'>
        {(params.tags??[]).map((tag,i) => { return (<div onClick={(e)=>{handleClick(tag,i,e);}} className='tag' current={i==selecteditem?'true':'false'}>&nbsp;&nbsp;&nbsp;{tag}&nbsp;&nbsp;&nbsp;</div>) })}
    </div></div>);
};

export default TagsList;