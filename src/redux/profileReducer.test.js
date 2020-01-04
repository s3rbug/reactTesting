import profileReducer, { addPost, deletePost } from './profileReducer'

let state = {
    posts: [
        { id: 0, userId: -1, isMine: false, postText: 'Я єбав, мене сосали', likeCount: '15', name: 'Naruto', image: 'https://img.taplb.com/md5/7f/5c/7f5c2fb5e8ee79cc0c2c89546116b0f8?TapTapIcon' },
        { id: 1, userId: -1, isMine: false, postText: 'Саске вернись в Коноху', likeCount: '20', name: 'Naruto', image: 'https://img.taplb.com/md5/7f/5c/7f5c2fb5e8ee79cc0c2c89546116b0f8?TapTapIcon' },
        { id: 2, userId: -1, isMine: false, postText: 'Аратімару, іди нахуй', likeCount: '67', name: 'Naruto', image: 'https://img.taplb.com/md5/7f/5c/7f5c2fb5e8ee79cc0c2c89546116b0f8?TapTapIcon' }
    ],
    profile: {
        userId: 5515,
        photos: {
            large: "#",
            small: "#"
        }
    }
}

it('count of posts should be incremented', () => {
    let action = addPost("123")
    let newState = profileReducer(state, action)
    expect(newState.posts.length).toBe(4)
}
)

it('text of the post should be correct', () => {
    let action = addPost("123")
    let newState = profileReducer(state, action)
    expect(newState.posts[3].postText).toBe("123")
})

it('count of posts should be decremented after post erasing', () => {
    let action = deletePost(2)
    let newState = profileReducer(state, action)
    expect(newState.posts.length).toBe(2)
})


it('count of posts should not be changed after wrong id post erasing', () => {
    let action = deletePost(2000)
    let newState = profileReducer(state, action)
    expect(newState.posts.length).toBe(3)
})