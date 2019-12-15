import { addPostAction } from "../../../redux/profileReducer"
import { updateNewPostTextAction } from "../../../redux/profileReducer"
import MyPosts from "./MyPosts"
import { connect } from 'react-redux'

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostAction())
        },

        changePost: (text) => {
            dispatch(updateNewPostTextAction(text))
        }
    }
}

const mapStateToProps = (state) => {
    return {
        newPostText: state.profilePage.newPostText,
        posts: state.profilePage.posts
    }
}

let MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer