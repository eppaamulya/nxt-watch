import {Component} from 'react'
import Cookies from 'js-cookie'

import Loader from 'react-loader-spinner'

import ReactPlayer from 'react-player'

import {AiOutlineDislike, AiOutlineLike} from 'react-icons/ai'
import {CgPlayListAdd} from 'react-icons/cg'
import AppContext from '../../context/AppContext'
import Header from '../Header'
import SideBar from '../SideBar'

import {
  VideoItemBgContainerLight,
  VideoItemBgContainerDark,
  VideoItemContainerLight,
  VideoItemContainerDark,
  ReactPlayerContainer,
  VideoItemContainerLight1,
  VideoItemContainerDark1,
  VideoItemContainerLight2,
  VideoItemContainerDark2,
  VideoItemContainerLight3,
  VideoItemContainerDark3,
  VideoItemContainerLight4,
  VideoItemContainerDark4,
  VideoItemContainerLight5,
  VideoItemContainerDark5,
  VideoItemButtonLike,
  VideoItemButtonUnLike,
  VideoItemButtonSave,
  VideoItemButtonLikeTrue,
  VideoItemButtonUnLikeTrue,
  VideoItemButtonSaveTrue,
  VideoItemImage,
  VideoItemTitleLight,
  VideoItemTitleDark,
  VideoItemViewsLight,
  VideoItemViewsDark,
  VideoItemDateLight,
  VideoItemDateDark,
  VideoItemNameLight,
  VideoItemNameDark,
  VideoItemCountLight,
  VideoItemCountDark,
  VideoItemParaLight,
  VideoItemParaDark,
  HorizontalLine,
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

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class VideoItemDetails extends Component {
  state = {
    videoItemList: {},
    liked: false,
    saved: false,
    unliked: false,
    videoData: {},
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getVideoItems()
  }

  getVideoItems = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const {match} = this.props
    const {params} = match
    const {id} = params
    const videoItemUrl = `https://apis.ccbp.in/videos/${id}`
    const videoItemOptions = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const videoItemResponse = await fetch(videoItemUrl, videoItemOptions)
    if (videoItemResponse.ok === true) {
      const videoItemData = await videoItemResponse.json()
      console.log(videoItemData)
      const videoItemUpdatedData = {
        description: videoItemData.video_details.description,
        publishedAt: videoItemData.video_details.published_at,
        title: videoItemData.video_details.title,
        videoUrl: videoItemData.video_details.video_url,
        viewCount: videoItemData.video_details.view_count,
        id: videoItemData.video_details.id,
        thumbnailUrl: videoItemData.video_details.thumbnail_url,
        channel: videoItemData.video_details.channel,
        name: videoItemData.video_details.channel.name,
        profileImageUrl: videoItemData.video_details.channel.profile_image_url,
        subscriberCount: videoItemData.video_details.channel.subscriber_count,
      }

      this.setState({
        videoItemList: videoItemUpdatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

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

  renderVideoItemDetailsView = () => (
    <AppContext.Consumer>
      {value => {
        const {isDarkTheme, saveVideo, unSaveVideo} = value

        const {videoItemList, liked, unliked, saved} = this.state
        console.log(saved)
        const {
          description,
          publishedAt,
          title,
          videoUrl,
          viewCount,
          id,
          thumbnailUrl,
          name,
          profileImageUrl,
          subscriberCount,
        } = videoItemList

        const handleSaveToggle = () => {
          if (!saved) {
            saveVideo({...videoItemList})
          } else {
            unSaveVideo(id)
          }

          this.setState(prevState => ({
            saved: !prevState.saved,
          }))
        }

        const handleLikeClick = () => {
          this.setState(prevState => ({
            liked: !prevState.liked,
            unliked: false, // Unlike when Like is clicked
          }))
        }

        const handleDislikeClick = () => {
          this.setState(prevState => ({
            unliked: !prevState.unliked,
            liked: false, // Unlike when Dislike is clicked
          }))
        }

        return (
          <>
            {isDarkTheme ? (
              <VideoItemBgContainerDark>
                <VideoItemContainerDark>
                  <ReactPlayerContainer>
                    <ReactPlayer url={videoUrl} controls />
                  </ReactPlayerContainer>

                  <VideoItemTitleDark>{title}</VideoItemTitleDark>
                  <VideoItemContainerDark1>
                    <VideoItemContainerDark2>
                      <VideoItemViewsDark>{viewCount}</VideoItemViewsDark>
                      <VideoItemDateDark>{publishedAt}</VideoItemDateDark>
                    </VideoItemContainerDark2>
                    <VideoItemContainerDark3>
                      <VideoItemButtonLike
                        style={{
                          color: liked ? '#2563eb' : '#64748b',
                        }}
                      >
                        <AiOutlineLike
                          fontSize={22}
                          style={{
                            color: liked ? '#2563eb' : '#64748b',
                            marginRight: '10px',
                          }}
                          onClick={handleLikeClick}
                        />
                        Like
                      </VideoItemButtonLike>

                      <VideoItemButtonUnLike
                        style={{
                          color: unliked ? '#2563eb' : '#64748b',
                        }}
                      >
                        <AiOutlineDislike
                          fontSize={22}
                          style={{
                            color: unliked ? '#2563eb' : '#64748b',
                            marginRight: '10px',
                          }}
                          onClick={handleDislikeClick}
                        />
                        DisLike
                      </VideoItemButtonUnLike>
                      <VideoItemButtonSave>
                        <CgPlayListAdd
                          fontSize={22}
                          style={{
                            color: saved ? '#2563eb' : '#64748b',
                            marginRight: '10px',
                          }}
                          onClick={handleSaveToggle}
                        />
                        {saved ? 'Saved' : 'Save'}
                      </VideoItemButtonSave>
                    </VideoItemContainerDark3>
                  </VideoItemContainerDark1>
                  <HorizontalLine />
                  <VideoItemContainerDark4>
                    <VideoItemImage src={profileImageUrl} alt="channellogo" />
                    <VideoItemContainerDark5>
                      <VideoItemNameDark>{name}</VideoItemNameDark>
                      <VideoItemCountDark>
                        {subscriberCount} subscribers
                      </VideoItemCountDark>
                      <VideoItemParaDark>{description}</VideoItemParaDark>
                    </VideoItemContainerDark5>
                  </VideoItemContainerDark4>
                </VideoItemContainerDark>
              </VideoItemBgContainerDark>
            ) : (
              <VideoItemBgContainerLight>
                <VideoItemContainerLight>
                  <ReactPlayerContainer>
                    <ReactPlayer url={videoUrl} controls />
                  </ReactPlayerContainer>

                  <VideoItemTitleLight>{title}</VideoItemTitleLight>
                  <VideoItemContainerDark1>
                    <VideoItemContainerDark2>
                      <VideoItemViewsLight>{viewCount}</VideoItemViewsLight>
                      <VideoItemDateLight>{publishedAt}</VideoItemDateLight>
                    </VideoItemContainerDark2>
                    <VideoItemContainerDark3>
                      <VideoItemButtonLike
                        style={{
                          color: liked ? '#2563eb' : '#64748b',
                        }}
                      >
                        <AiOutlineLike
                          fontSize={22}
                          style={{
                            color: liked ? '#2563eb' : '#64748b',
                            marginRight: '10px',
                          }}
                          onClick={handleLikeClick}
                        />
                        Like
                      </VideoItemButtonLike>

                      <VideoItemButtonUnLike
                        style={{
                          color: unliked ? '#2563eb' : '#64748b',
                        }}
                      >
                        <AiOutlineDislike
                          fontSize={22}
                          style={{
                            color: unliked ? '#2563eb' : '#64748b',
                            marginRight: '10px',
                          }}
                          onClick={handleDislikeClick}
                        />
                        DisLike
                      </VideoItemButtonUnLike>

                      <VideoItemButtonSave
                        style={{
                          color: saved ? '#2563eb' : '#64748b',
                        }}
                      >
                        <CgPlayListAdd
                          fontSize={22}
                          style={{
                            color: saved ? '#2563eb' : '#64748b',
                            marginRight: '10px',
                          }}
                          onClick={handleSaveToggle}
                        />
                        {saved ? 'Saved' : 'Save'}
                      </VideoItemButtonSave>
                    </VideoItemContainerDark3>
                  </VideoItemContainerDark1>
                  <HorizontalLine />
                  <VideoItemContainerLight4>
                    <VideoItemImage src={profileImageUrl} alt="channel logo" />
                    <VideoItemContainerDark5>
                      <VideoItemNameLight>{name}</VideoItemNameLight>
                      <VideoItemCountLight>
                        {subscriberCount} subscribers
                      </VideoItemCountLight>
                      <VideoItemParaLight>{description}</VideoItemParaLight>
                    </VideoItemContainerDark5>
                  </VideoItemContainerLight4>
                </VideoItemContainerLight>
              </VideoItemBgContainerLight>
            )}
          </>
        )
      }}
    </AppContext.Consumer>
  )

  renderVideoItemDetails = () => {
    const {apiStatus} = this.state
    console.log(apiStatus)
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderVideoItemDetailsView()
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
        <VideoItemBgContainerLight>
          <SideBar />
          {this.renderVideoItemDetails()}
        </VideoItemBgContainerLight>
      </>
    )
  }
}

export default VideoItemDetails
