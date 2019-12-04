import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let dialogs = [
    {id: 0, name: 'Stepan'},
    {id: 1, name: 'Taras'},
    {id: 2, name: 'Vitya'},
    {id: 3, name: 'Vita'},
    {id: 4, name: 'Katya'}
];

let messages = [
    {id: 0, message: "How is your dick?"},
    {id: 1, message: '1'},
    {id: 2, message: '2'},
    {id: 3, message: '3'},
    {id: 4, message: '4'}
];

let posts = [
    {id: 0, postText: 'Я єбав, мене сосали', likeCount: '15', name: "Naruto", image:"http://files.softicons.com/download/culture-icons/popular-anime-icons-by-iconspedia/png/256x256/Naruto.png"},
    {id: 1, postText: 'Саске вернись в Коноху', likeCount: '20', name: "Naruto", image:"http://files.softicons.com/download/culture-icons/popular-anime-icons-by-iconspedia/png/256x256/Naruto.png"},
    {id: 2, postText: 'Аратімару, іди нахуй', likeCount: '67', name: "Naruto", image:"http://files.softicons.com/download/culture-icons/popular-anime-icons-by-iconspedia/png/256x256/Naruto.png"}
];

ReactDOM.render(<App posts={posts} dialogs={dialogs} messages={messages}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
