import { changePost, addPost } from "../../../redux/profileReducer"
import MyPosts from "./MyPosts"
import { connect } from 'react-redux'

const mapDispatchToProps = {
    addPost,
    changePost
}

const mapStateToProps = (state) => {
    return {
        newPostText: state.profilePage.newPostText,
        posts: state.profilePage.posts
    }
}

let MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer