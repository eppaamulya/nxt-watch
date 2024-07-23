import {Component} from 'react'

import {Switch, Route, Redirect} from 'react-router-dom'

import Login from './components/Login'
import Home from './components/Home'
import VideoItemDetails from './components/VideoItemDetails'
import NotFound from './components/NotFound'
import SavedVideos from './components/SavedVideos'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import ProtectedRoute from './components/ProtectedRoute'
import AppContext from './context/AppContext'

import './App.css'

// Replace your code here
class App extends Component {
  state = {
    isDarkTheme: false,
    videoList: [],
  }

  toggleTheme = () => {
    this.setState(prevState => ({isDarkTheme: !prevState.isDarkTheme}))
  }

  saveVideo = video => {
    this.setState(prevState => ({videoList: [...prevState.videoList, video]}))
  }

  unSaveVideo = video => {
    this.setState(prevState => ({
      videoList: [...prevState.videoList.filter(item => item.id !== video)],
    }))
  }

  render() {
    const {isDarkTheme, videoList} = this.state
    return (
      <>
        <AppContext.Provider
          value={{
            isDarkTheme,
            videoList,
            toggleTheme: this.toggleTheme,
            saveVideo: this.saveVideo,
            unSaveVideo: this.unSaveVideo,
          }}
        >
          <Switch>
            <Route exact path="/login" component={Login} />
            <ProtectedRoute exact path="/" component={Home} />
            <ProtectedRoute exact path="/trending" component={Trending} />
            <ProtectedRoute exact path="/gaming" component={Gaming} />
            <ProtectedRoute
              exact
              path="/saved-videos"
              component={SavedVideos}
            />
            <ProtectedRoute
              exact
              path="/videos/:id"
              component={VideoItemDetails}
            />
            <Route path="/not-found" component={NotFound} />
            <Redirect to="/not-found" />
          </Switch>
        </AppContext.Provider>
      </>
    )
  }
}

export default App
