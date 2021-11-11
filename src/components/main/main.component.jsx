import React from "react";
import './main.styles.css';
import { Post } from "../post/post.component";



function createPosts(numberOfPosts){
    
    var posts =[];
    for(let i =0; i<numberOfPosts;i++){
    posts.push(<Post></Post>);
    }
    return posts;
}
export const Main = (props) =>(
    <div className="main">
        {
         createPosts(props.numberOfPosts)
        }
    </div>
);


