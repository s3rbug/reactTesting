import React from 'react'
import { addPostAction } from "../../../redux/profileReducer"
import { updateNewPostTextAction } from "../../../redux/profileReducer"
import MyPosts from "./MyPosts"

const MyPostsContainer = (props) => {
    let state = props.store.getState()
    let addPost = () => {
        props.store.dispatch(addPostAction())
    }
    let changePost = (text) => {
        props.store.dispatch(updateNewPostTextAction(text))
    }
    return (
        <MyPosts
            newPostText={state.profilePage.newPostText}
            posts={state.profilePage.posts}
            addPost={addPost}
            changePost={changePost} />
    );
}

export default MyPostsContainer