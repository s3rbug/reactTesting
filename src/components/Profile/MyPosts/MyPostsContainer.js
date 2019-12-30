import { addPost } from "../../../redux/profileReducer"
import MyPosts from "./MyPosts"
import { connect } from 'react-redux'

const mapDispatchToProps = {
    addPost
}

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts
    }
}

let MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer