import {Component} from 'react'

import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {HiFire} from 'react-icons/hi'

import {
  TrendBgContainerLight,
  TrendBgContainerDark,
  TrendContainerLight,
  TrendContainerDark,
  TrendContainerLight1,
  TrendContainerDark1,
  TrendHeadingLight,
  TrendHeadingDark,
  TrendIconLight,
  TrendIconDark,
  TrendUnlistContainer,
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
import TrendsCard from '../TrendsCard'
import SideBar from '../SideBar'
import Header from '../Header'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Trending extends Component {
  state = {trendingList: [], apiStatus: apiStatusConstants.initial}

  componentDidMount() {
    this.getTrendings()
  }

  getTrendings = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const trendingUrl = 'https://apis.ccbp.in/videos/trending'
    const trendingOptions = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const trendingResponse = await fetch(trendingUrl, trendingOptions)

    const trendingData = await trendingResponse.json()
    if (trendingResponse.ok === true) {
      const trendingUpdatedData = trendingData.videos.map(eachTrend => ({
        id: eachTrend.id,
        title: eachTrend.title,
        channel: eachTrend.channel,
        name: eachTrend.channel.name,
        profileImageUrl: eachTrend.channel.profile_image_url,
        publishedAt: eachTrend.published_at,
        thumbnailUrl: eachTrend.thumbnail_url,
        viewCount: eachTrend.view_count,
      }))
      this.setState({
        trendingList: trendingUpdatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderTrendingView = () => (
    <AppContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const {trendingList} = this.state

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

        return (
          <>
            {isDarkTheme ? (
              <TrendBgContainerDark data-testid="trending">
                <TrendContainerDark>
                  <TrendContainerDark1>
                    <TrendIconDark>
                      <HiFire />
                    </TrendIconDark>

                    <TrendHeadingDark>Trending</TrendHeadingDark>
                  </TrendContainerDark1>

                  <TrendUnlistContainer>
                    {trendingList.map(eachTrend => (
                      <TrendsCard trendDetails={eachTrend} key={eachTrend.id} />
                    ))}
                  </TrendUnlistContainer>
                </TrendContainerDark>
              </TrendBgContainerDark>
            ) : (
              <TrendBgContainerLight data-testid="trending">
                <TrendContainerLight>
                  <TrendContainerLight1>
                    <TrendIconLight>
                      <HiFire />
                    </TrendIconLight>

                    <TrendHeadingLight>Trending</TrendHeadingLight>
                  </TrendContainerLight1>

                  <TrendUnlistContainer>
                    {trendingList.map(eachTrend => (
                      <TrendsCard trendDetails={eachTrend} key={eachTrend.id} />
                    ))}
                  </TrendUnlistContainer>
                </TrendContainerLight>
              </TrendBgContainerLight>
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
    this.getTrendings()
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

  renderTrendingVideos = () => {
    const {apiStatus} = this.state
    console.log(apiStatus)
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderTrendingView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingview()
      default:
        return null
    }
  }

  render() {
    return (
      <>
        <Header />
        <TrendBgContainerLight>
          <SideBar />
          <>{this.renderTrendingVideos()}</>
        </TrendBgContainerLight>
      </>
    )
  }
}

export default Trending
