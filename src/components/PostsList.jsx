import React from 'react';
import PostItem from './PostItem';


export default
function PostList(props)
{
const {posts} = props;
//console.log(posts);

    return(
        <div>
            <h2>Lista postari:</h2>
            { 
                posts.map( (post,index) => 
                { 
                    return ( 
                        <PostItem 
                            id={post.id} 
                            userId={post.userId} 
                            title={post.title} 
                            body={post.body} 
                            key={index}
                        />
                    );
               
                })
           } 

        </div>
    );
}
