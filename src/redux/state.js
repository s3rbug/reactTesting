import {rerenderEverything} from './../render';

let state = {
    profilePage: {
        posts: [
            {id: 0, postText: 'Я єбав, мене сосали', likeCount: '15', name: "Naruto", image:"http://files.softicons.com/download/culture-icons/popular-anime-icons-by-iconspedia/png/256x256/Naruto.png"},
            {id: 1, postText: 'Саске вернись в Коноху', likeCount: '20', name: "Naruto", image:"http://files.softicons.com/download/culture-icons/popular-anime-icons-by-iconspedia/png/256x256/Naruto.png"},
            {id: 2, postText: 'Аратімару, іди нахуй', likeCount: '67', name: "Naruto", image:"http://files.softicons.com/download/culture-icons/popular-anime-icons-by-iconspedia/png/256x256/Naruto.png"}
        ]
    },
    
    messagesPage: {
        messages: [
            {id: 0, message: "How is your dick?"},
            {id: 1, message: '1'},
            {id: 2, message: '2'},
            {id: 3, message: '3'},
            {id: 4, message: '4'}
        ],
        dialogs: [
            {id: 0, name: 'Stepan'},
            {id: 1, name: 'Taras'},
            {id: 2, name: 'Vitya'},
            {id: 3, name: 'Vita'},
            {id: 4, name: 'Katya'}
        ]
    }
};

export function addPost(postMessage){
    let newPost = {
        id: 5,
        postText: postMessage,
        likeCount: 0,
        name: "Sakura",
        image: "https://www.trzcacak.rs/myfile/full/226-2262207_transparent-sakuras-doing-the-sakura-with-long-hair.png"
    };
    state.profilePage.posts.push(newPost);
    rerenderEverything(state);
}

export default state;