import {parse, formatDistanceToNow} from 'date-fns'
import {Link} from 'react-router-dom'

import {
  TrendListContainerLight,
  TrendListContainerDark,
  TrendListContainerLight1,
  TrendListContainerDark1,
  TrendListContainerLight2,
  ThumbnailImage,
  VideoName,
  VideoTitle,
  VideoCount,
  VideoDate,
} from './styledComponents'
import AppContext from '../../context/AppContext'

const TrendsCard = props => (
  <AppContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const {trendDetails} = props
      const {
        id,
        name,
        title,
        publishedAt,
        profileImageUrl,
        viewCount,
        thumbnailUrl,
      } = trendDetails

      const formatDate = formatDistanceToNow(
        parse(`${publishedAt}`, 'MMM d, yyyy', new Date()),
      )

      const trendListContainer = isDarkTheme
        ? 'trend-list-container-dark'
        : 'trend-list-container-light'
      const trendListContainer2 = isDarkTheme
        ? 'trend-list-container-2-dark'
        : 'trend-list-container-2-light'

      return (
        <>
          {isDarkTheme ? (
            <Link to={`/videos/${id}`} style={{textDecoration: 'none'}}>
              <TrendListContainerDark>
                <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
                <TrendListContainerDark1>
                  <VideoTitle>{title}</VideoTitle>
                  <VideoName>{name}</VideoName>
                  <TrendListContainerLight2>
                    <VideoCount>{viewCount} Views</VideoCount>
                    <VideoDate>. {formatDate}</VideoDate>
                  </TrendListContainerLight2>
                </TrendListContainerDark1>
              </TrendListContainerDark>
            </Link>
          ) : (
            <Link to={`/videos/${id}`} style={{textDecoration: 'none'}}>
              <TrendListContainerLight>
                <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
                <TrendListContainerLight1>
                  <VideoTitle>{title}</VideoTitle>
                  <VideoName>{name}</VideoName>
                  <TrendListContainerLight2>
                    <VideoCount>{viewCount} Views</VideoCount>
                    <VideoDate>. {formatDate}</VideoDate>
                  </TrendListContainerLight2>
                </TrendListContainerLight1>
              </TrendListContainerLight>
            </Link>
          )}
        </>
      )
    }}
  </AppContext.Consumer>
)

export default TrendsCard
