import React from 'react';

export default
function PostItem(props)
{
    const {title,body} = props;
    return (
            <div>
               
                <h2>{title}</h2>
                <p>{body}</p>
            
             </div>
    );



}