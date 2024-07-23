import VideoItem from '../VideoItem'
import AppContext from '../../context/AppContext'

const VideoListView = () => (
  <AppContext.Consumer>
    {value => {
      const {videoList} = value
      return (
        <ul className="cart-list">
          {videoList.map(eachCartItem => (
            <VideoItem key={eachCartItem.id} cartItemDetails={eachCartItem} />
          ))}
        </ul>
      )
    }}
  </AppContext.Consumer>
)

export default VideoListView
