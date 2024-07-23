import AppContext from '../../context/AppContext'
import Header from '../Header'
import SideBar from '../SideBar'
import {
  NotContainerLight,
  NotContainerDark,
  NotContainerLight1,
  NotContainerDark1,
  NotHeadingLight,
  NotHeadingDark,
  NotParaLight,
  NotParaDark,
  NotImageDark,
  NotImageLight,
} from './styledComponents'

const NotFound = () => (
  <AppContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const bgContainer = isDarkTheme
        ? 'bg-container-dark'
        : 'bg-container-light'

      const noSavedHeading = isDarkTheme
        ? 'no-saved-heading-dark'
        : 'no-saved-heading-light'
      const noSavedPara = isDarkTheme
        ? 'no-saved-para-dark'
        : 'no-saved-para-light'
      const notFoundImage = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
      return (
        <>
          <Header />
          {isDarkTheme ? (
            <NotContainerDark>
              <SideBar />
              <NotContainerDark1>
                <NotImageDark
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png"
                  alt="not found"
                />
                <NotHeadingDark>Page Not Found</NotHeadingDark>
                <NotParaDark>
                  We are sorry, the page you requested could not be found.
                </NotParaDark>
              </NotContainerDark1>
            </NotContainerDark>
          ) : (
            <NotContainerLight>
              <SideBar />
              <NotContainerLight1>
                <NotImageLight
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png"
                  alt="not found"
                />
                <NotHeadingLight>Page Not Found</NotHeadingLight>
                <NotParaLight>
                  We are sorry, the page you requested could not be found.
                </NotParaLight>
              </NotContainerLight1>
            </NotContainerLight>
          )}
        </>
      )
    }}
  </AppContext.Consumer>
)

export default NotFound
