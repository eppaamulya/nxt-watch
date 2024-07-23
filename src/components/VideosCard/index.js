import {parse, formatDistanceToNow} from 'date-fns'

import {Link} from 'react-router-dom'
import AppContext from '../../context/AppContext'

import {
  VideoListContainerLight,
  VideoListContainerDark,
  VideoListContainerLight1,
  VideoListContainerLight2,
  VideoListContainerDark2,
  VideoListContainerLight3,
  ThumbnailImage,
  VideoProfileImage,
  VideoName,
  VideoTitle,
  VideoCount,
  VideoDate,
} from './styledComponents'

const VideosCard = props => (
  <AppContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const {videoDetails} = props
      const {
        id,
        name,
        title,
        publishedAt,
        profileImageUrl,
        viewCount,
        thumbnailUrl,
      } = videoDetails

      const formatDate = formatDistanceToNow(
        parse(`${publishedAt}`, 'MMM d, yyyy', new Date()),
      )

      const videoListContainer = isDarkTheme
        ? 'video-list-container-dark'
        : 'video-list-container-light'
      const videoListContainer2 = isDarkTheme
        ? 'video-list-container-2-dark'
        : 'video-list-container-2-light'

      return (
        <>
          {isDarkTheme ? (
            <Link to={`/videos/${id}`} style={{textDecoration: 'none'}}>
              <VideoListContainerDark>
                <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
                <VideoListContainerLight1>
                  <VideoProfileImage src={profileImageUrl} alt="channel logo" />
                  <VideoListContainerDark2>
                    <VideoTitle>{title}</VideoTitle>
                    <VideoName>{name}</VideoName>
                    <VideoListContainerLight3>
                      <VideoCount>{viewCount} Views</VideoCount>
                      <VideoDate>{formatDate}</VideoDate>
                    </VideoListContainerLight3>
                  </VideoListContainerDark2>
                </VideoListContainerLight1>
              </VideoListContainerDark>
            </Link>
          ) : (
            <Link to={`/videos/${id}`} style={{textDecoration: 'none'}}>
              <VideoListContainerLight>
                <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
                <VideoListContainerLight1>
                  <VideoProfileImage src={profileImageUrl} alt="channel logo" />
                  <VideoListContainerLight2>
                    <VideoTitle>{title}</VideoTitle>
                    <VideoName>{name}</VideoName>
                    <VideoListContainerLight3>
                      <VideoCount>{viewCount} Views</VideoCount>
                      <VideoDate>. {formatDate}</VideoDate>
                    </VideoListContainerLight3>
                  </VideoListContainerLight2>
                </VideoListContainerLight1>
              </VideoListContainerLight>
            </Link>
          )}
        </>
      )
    }}
  </AppContext.Consumer>
)

export default VideosCard
