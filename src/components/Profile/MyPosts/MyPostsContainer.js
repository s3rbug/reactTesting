import React from 'react'
import { addPostAction } from "../../../redux/profileReducer"
import { updateNewPostTextAction } from "../../../redux/profileReducer"
import MyPosts from "./MyPosts"
import StoreContext from '../../../StoreContext'

const MyPostsContainer = () => {
    return (
        <StoreContext.Consumer>{
            (store) => {
                let addPost = () => {
                    store.dispatch(addPostAction())
                }
                let changePost = (text) => {
                    store.dispatch(updateNewPostTextAction(text))
                }
                return (<MyPosts
                    newPostText={store.getState().profilePage.newPostText}
                    posts={store.getState().profilePage.posts}
                    addPost={addPost}
                    changePost={changePost} />)
            }
        }
        </StoreContext.Consumer>
    );
}

export default MyPostsContainer