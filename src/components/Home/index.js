import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import {BiSearch} from 'react-icons/bi'

import {GrFormClose} from 'react-icons/gr'
import {
  HomeBgContainerLight,
  HomeBgContainerDark,
  HomeVideoContainerLight,
  HomeVideoContainerDark,
  HomeUnListContainer,
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
  BannerContainer,
  BannerContainer1,
  BannerImage,
  BannerButton1,
  BannerContainer2,
  BannerPara,
  BannerButton,
  SearchContainer,
  SearchInputLight,
  SearchInputDark,
  SearchButtonLight,
  SearchButtonDark,
  NoSearchContainer,
  NoSearchImage,
  NoSearchHeadingLight,
  NoSearchHeadingDark,
  NoSearchPara,
  NoSearchButton,
} from './styledComponents'

import Header from '../Header'
import SideBar from '../SideBar'
import VideosCard from '../VideosCard'
import AppContext from '../../context/AppContext'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    videosList: [],
    apiStatus: apiStatusConstants.initial,
    showPopup: true,
    searchInput: '',
  }

  componentDidMount() {
    this.getvideos()
  }

  getvideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {searchInput} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok === true) {
      const videoData = await response.json()
      console.log(videoData)
      const videoUpdatedData = videoData.videos.map(eachVideo => ({
        id: eachVideo.id,
        title: eachVideo.title,
        channel: eachVideo.channel,
        name: eachVideo.channel.name,
        profileImageUrl: eachVideo.channel.profile_image_url,
        publishedAt: eachVideo.published_at,
        thumbnailUrl: eachVideo.thumbnail_url,
        viewCount: eachVideo.view_count,
      }))
      this.setState({
        videosList: videoUpdatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onClickRetry = () => {
    this.getvideos()
  }

  renderNoSearchResults = () => (
    <AppContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        return (
          <>
            {isDarkTheme ? (
              <NoSearchContainer>
                <NoSearchImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
                  alt="no videos"
                />
                <NoSearchHeadingDark>
                  No Search results found
                </NoSearchHeadingDark>
                <NoSearchPara>
                  Try different key words or remove search filter
                </NoSearchPara>
                <NoSearchButton type="button" onClick={this.onClickRetry}>
                  Retry
                </NoSearchButton>
              </NoSearchContainer>
            ) : (
              <NoSearchContainer>
                <NoSearchImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
                  alt="no videos"
                />
                <NoSearchHeadingLight>
                  No Search results found
                </NoSearchHeadingLight>
                <NoSearchPara>
                  Try different key words or remove search filter
                </NoSearchPara>
                <NoSearchButton type="button" onClick={this.onClickRetry}>
                  Retry
                </NoSearchButton>
              </NoSearchContainer>
            )}
          </>
        )
      }}
    </AppContext.Consumer>
  )

  renderHomeView = () => (
    <AppContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const {videosList, showPopup, searchInput} = this.state

        const closePopUp = () => {
          this.setState({showPopup: false})
        }

        const onChangeSearchInput = event => {
          this.setState({searchInput: event.target.value})
        }

        const searchResults = videosList.filter(eachUser =>
          eachUser.title.toLowerCase().includes(searchInput),
        )

        const searchResultsLength = searchResults.length !== 0

        return (
          <>
            {isDarkTheme ? (
              <HomeBgContainerDark data-testid="home">
                <HomeVideoContainerDark>
                  {showPopup && (
                    <BannerContainer data-testid="banner">
                      <BannerContainer1>
                        <BannerImage
                          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                          alt="nxt watch logo"
                        />
                        <BannerPara>
                          Buy Nxt Watch Premium prepaid plans with UPI
                        </BannerPara>
                        <BannerButton1>GET IT NOW</BannerButton1>
                      </BannerContainer1>
                      <BannerContainer2>
                        <BannerButton data-testid="close" onClick={closePopUp}>
                          <GrFormClose fontSize={17} />
                        </BannerButton>
                      </BannerContainer2>
                    </BannerContainer>
                  )}
                  <SearchContainer>
                    <SearchInputDark
                      type="search"
                      onChange={onChangeSearchInput}
                      placeholder="Search"
                      value={searchInput}
                    />
                    <SearchButtonDark type="button" data-testid="searchButton">
                      <BiSearch fontSize={18} color="#ffffff" />
                    </SearchButtonDark>
                  </SearchContainer>
                  <HomeUnListContainer>
                    {searchResultsLength
                      ? searchResults.map(eachVideo => (
                          <VideosCard
                            videoDetails={eachVideo}
                            key={eachVideo.id}
                          />
                        ))
                      : this.renderNoSearchResults()}
                  </HomeUnListContainer>
                </HomeVideoContainerDark>
              </HomeBgContainerDark>
            ) : (
              <HomeBgContainerLight data-testid="home">
                <HomeVideoContainerLight>
                  {showPopup && (
                    <BannerContainer data-testid="banner">
                      <BannerContainer1>
                        <BannerImage
                          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                          alt="nxt watch logo"
                        />
                        <BannerPara>
                          Buy Nxt Watch Premium prepaid plans with UPI
                        </BannerPara>
                        <BannerButton1>GET IT NOW</BannerButton1>
                      </BannerContainer1>
                      <BannerContainer2>
                        <BannerButton data-testid="close" onClick={closePopUp}>
                          <GrFormClose fontSize={18} />
                        </BannerButton>
                      </BannerContainer2>
                    </BannerContainer>
                  )}
                  <SearchContainer>
                    <SearchInputLight
                      type="search"
                      placeholder="Search"
                      onChange={onChangeSearchInput}
                      value={searchInput}
                    />
                    <SearchButtonLight type="button" data-testid="searchButton">
                      <BiSearch fontSize={17} color="#383838" />
                    </SearchButtonLight>
                  </SearchContainer>
                  <HomeUnListContainer>
                    {searchResultsLength
                      ? searchResults.map(eachVideo => (
                          <VideosCard
                            videoDetails={eachVideo}
                            key={eachVideo.id}
                          />
                        ))
                      : this.renderNoSearchResults()}
                  </HomeUnListContainer>
                </HomeVideoContainerLight>
              </HomeBgContainerLight>
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

  renderFailureView = () => (
    <AppContext.Consumer>
      {value => {
        const {isDarkTheme} = value

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

  renderHomeVideos = () => {
    const {apiStatus} = this.state
    console.log(apiStatus)
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderHomeView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingview()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <>
        <Header />
        <HomeBgContainerLight>
          <SideBar />
          {this.renderHomeVideos()}
        </HomeBgContainerLight>
      </>
    )
  }
}

export default Home
