import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

function MyPosts() {
    let postsData = [
        {id: 0, postText: 'Я єбав, мене сосали', likeCount: '15', name: "Naruto", image:"http://files.softicons.com/download/culture-icons/popular-anime-icons-by-iconspedia/png/256x256/Naruto.png"},
        {id: 1, postText: 'Саске вернись в Коноху', likeCount: '20', name: "Naruto", image:"http://files.softicons.com/download/culture-icons/popular-anime-icons-by-iconspedia/png/256x256/Naruto.png"},
        {id: 2, postText: 'Аратімару, іди нахуй', likeCount: '67', name: "Naruto", image:"http://files.softicons.com/download/culture-icons/popular-anime-icons-by-iconspedia/png/256x256/Naruto.png"}
    ];

    let postsElements = postsData.map(data => <Post likeCount={data.likeCount} name={data.name} message={data.postText} image = {data.image}></Post>);

    return (
        <div>
            <div className={classes.changePost}>
                <textarea></textarea>
                <button id={classes.addPost}>Add post</button>
                <button id={classes.removePost}>Remove</button>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;