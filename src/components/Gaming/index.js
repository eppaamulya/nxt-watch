import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {Link} from 'react-router-dom'
import {SiYoutubegaming} from 'react-icons/si'
import {
  GameBgContainerLight,
  GameBgContainerDark,
  GameContainerLight,
  GameContainerDark,
  GameContainerLight1,
  GameContainerDark1,
  GameHeadingLight,
  GameHeadingDark,
  GameIconLight,
  GameIconDark,
  GameUnlistContainer,
  GameListContainer,
  GameImage,
  GameTitleLight,
  GameTitleDark,
  GameViews,
  LoaderContainer,
  FailureContainerLight,
  FailureContainerDark,
  FailureImageLight,
  FailureImageDark,
  FailureHeadingDark,
  FailureHeadingLight,
  FailureParaDark,
  FailureParaLight,
  FailureButton,
} from './styledComponents'

import AppContext from '../../context/AppContext'
import GamesCard from '../VideosCard'
import SideBar from '../SideBar'
import Header from '../Header'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Gaming extends Component {
  state = {gamingList: [], apiStatus: apiStatusConstants.initial}

  componentDidMount() {
    this.getGamings()
  }

  getGamings = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const gamingUrl = 'https://apis.ccbp.in/videos/gaming'
    const gamingOptions = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const gamingResponse = await fetch(gamingUrl, gamingOptions)
    const gamingData = await gamingResponse.json()
    if (gamingResponse.ok === true) {
      console.log(gamingData)
      const gamingUpdatedData = gamingData.videos.map(eachGame => ({
        id: eachGame.id,
        title: eachGame.title,
        thumbnailUrl: eachGame.thumbnail_url,
        viewCount: eachGame.view_count,
      }))
      this.setState({
        gamingList: gamingUpdatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderGamingView = () => (
    <AppContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const {gamingList} = this.state
        console.log(gamingList)

        const bgContainer = isDarkTheme
          ? 'bg-container-dark'
          : 'bg-container-light'

        const trendContainer = isDarkTheme
          ? 'trend-container-dark'
          : 'trend-container-light'

        const trendContainer1 = isDarkTheme
          ? 'trend-container-dark-1'
          : 'trend-container-light-1'

        const trendIcon = isDarkTheme ? 'trend-icon-dark' : 'trend-icon-light'
        const trendHeading = isDarkTheme
          ? 'trend-heading-dark'
          : 'trend-heading-light'

        const gameTitle = isDarkTheme ? 'game-title-dark' : 'game-title-light'

        return (
          <>
            {isDarkTheme ? (
              <GameBgContainerDark data-testid="gaming">
                <GameContainerDark>
                  <GameContainerDark1>
                    <GameIconDark>
                      <SiYoutubegaming />
                    </GameIconDark>
                    <GameHeadingDark className={trendHeading}>
                      Gaming
                    </GameHeadingDark>
                  </GameContainerDark1>
                  <GameUnlistContainer>
                    {gamingList.map(video => (
                      <Link
                        to={`/videos/${video.id}`}
                        style={{textDecoration: 'none'}}
                      >
                        <GameListContainer key={video.id}>
                          <GameImage
                            src={video.thumbnailUrl}
                            alt="video thumbnail"
                          />
                          <GameTitleDark>{video.title}</GameTitleDark>
                          <GameViews>
                            {video.viewCount} Watching Worldwide
                          </GameViews>
                        </GameListContainer>
                      </Link>
                    ))}
                  </GameUnlistContainer>
                </GameContainerDark>
              </GameBgContainerDark>
            ) : (
              <GameBgContainerLight data-testid="gaming">
                <GameContainerLight>
                  <GameContainerLight1>
                    <GameIconLight>
                      <SiYoutubegaming />
                    </GameIconLight>
                    <GameHeadingLight>Gaming</GameHeadingLight>
                  </GameContainerLight1>
                  <GameUnlistContainer>
                    {gamingList.map(video => (
                      <Link
                        to={`/videos/${video.id}`}
                        style={{textDecoration: 'none'}}
                      >
                        <GameListContainer key={video.id}>
                          <GameImage
                            src={video.thumbnailUrl}
                            alt="video thumbnail"
                          />
                          <GameTitleLight>{video.title}</GameTitleLight>
                          <GameViews>
                            {video.viewCount} Watching Worldwide
                          </GameViews>
                        </GameListContainer>
                      </Link>
                    ))}
                  </GameUnlistContainer>
                </GameContainerLight>
              </GameBgContainerLight>
            )}
          </>
        )
      }}
    </AppContext.Consumer>
  )

  renderLoadingview = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
    </LoaderContainer>
  )

  onClickRetry = () => {
    this.getGamings()
  }

  renderFailureView = () => (
    <AppContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        const failureContainer = isDarkTheme
          ? 'failure-container-dark'
          : 'failure-container-light'
        const noSavedHeading = isDarkTheme
          ? 'no-saved-heading-dark'
          : 'no-saved-heading-light'
        const noSavedPara = isDarkTheme
          ? 'no-saved-para-dark'
          : 'no-saved-para-light'

        const failureImage = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

        return (
          <>
            {isDarkTheme ? (
              <FailureContainerDark>
                <FailureImageDark
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png"
                  alt="failure view"
                />
                <FailureHeadingDark>
                  Oops! Something Went Wrong
                </FailureHeadingDark>
                <FailureParaDark>
                  We are having some trouble to complete your request. Please
                  try again.
                </FailureParaDark>
                <FailureButton onClick={this.onClickRetry}>Retry</FailureButton>
              </FailureContainerDark>
            ) : (
              <FailureContainerLight>
                <FailureImageLight
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
                  alt="failure view"
                />
                <FailureHeadingLight>
                  Oops! Something Went Wrong
                </FailureHeadingLight>
                <FailureParaLight>
                  We are having some trouble to complete your request. Please
                  try again.
                </FailureParaLight>
                <FailureButton onClick={this.onClickRetry}>Retry</FailureButton>
              </FailureContainerLight>
            )}
          </>
        )
      }}
    </AppContext.Consumer>
  )

  renderGamingVideos = () => {
    const {apiStatus} = this.state
    console.log(apiStatus)
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderGamingView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingview()
      default:
        return null
    }
  }

  render() {
    const {gamingList} = this.state
    console.log(gamingList)
    return (
      <>
        <Header />
        <GameBgContainerLight>
          <SideBar />
          <>{this.renderGamingVideos()}</>
        </GameBgContainerLight>
      </>
    )
  }
}

export default Gaming
