import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import NavBar from './components/NavBar/NavBar'
import Profile from './components/Profile/Profile'
import Dialogs from './components/Dialogs/Dialogs'
import News from './components/News/News'
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'

function App (props) {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <NavBar />
        <div className='app-wrapper-content'>
          <Route path='/dialogs' render={() => <Dialogs messagesPage={props.state.messagesPage} />} />
          <Route path='/profile' render={() => <Profile updateNewPostText={props.updateNewPostText} addPost={props.addPost} profilePage={props.state.profilePage} newPostText={props.state.profilePage.newPostText}/>} />
          <Route path='/news' render={() => <News />} />
          <Route path='/music' render={() => <Music />} />
          <Route path='/settings' render={() => <Settings />} />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
