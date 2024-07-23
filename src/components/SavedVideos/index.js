import AppContext from '../../context/AppContext'
import Header from '../Header'
import SideBar from '../SideBar'
import VideoListView from '../VideoListView'

import {
  SavedContainerLight,
  SavedContainerDark,
  SavedContainerLight1,
  SavedContainerDark1,
  SavedHeadingLight,
  SavedHeadingDark,
  SavedParaLight,
  SavedParaDark,
  SavedImageDark,
  SavedImageLight,
} from './styledComponents'

const SavedVideos = () => (
  <AppContext.Consumer>
    {value => {
      const {isDarkTheme, videoList} = value

      const showEmptyView = videoList.length === 0

      return (
        <>
          {showEmptyView ? (
            <>
              <Header />

              {isDarkTheme ? (
                <>
                  <SavedContainerDark>
                    <SideBar />
                    <SavedContainerDark1>
                      <SavedImageDark
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                        alt="no saved videos"
                      />
                      <SavedHeadingDark>No saved videos found</SavedHeadingDark>
                      <SavedParaDark>
                        You can save your videos while watching them
                      </SavedParaDark>
                    </SavedContainerDark1>
                  </SavedContainerDark>
                </>
              ) : (
                <>
                  <SavedContainerLight>
                    <SideBar />
                    <SavedContainerLight1>
                      <SavedImageLight
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                        alt="no saved videos"
                      />
                      <SavedHeadingLight>
                        No saved videos found
                      </SavedHeadingLight>
                      <SavedParaLight>
                        You can save your videos while watching them
                      </SavedParaLight>
                    </SavedContainerLight1>
                  </SavedContainerLight>
                </>
              )}
            </>
          ) : (
            <>
              <Header />
              {isDarkTheme ? (
                <SavedContainerDark>
                  <SideBar />
                  <VideoListView />
                </SavedContainerDark>
              ) : (
                <SavedContainerLight>
                  <SideBar />
                  <VideoListView />
                </SavedContainerLight>
              )}
            </>
          )}
        </>
      )
    }}
  </AppContext.Consumer>
)

export default SavedVideos
