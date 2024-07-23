import {Component} from 'react'

import Popup from 'reactjs-popup'
import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import {CgDarkMode} from 'react-icons/cg'
import {TiAdjustBrightness} from 'react-icons/ti'
import {
  HeaderBgLight,
  HeaderBgDark,
  HeaderImageDark,
  HeaderContainerDark,
  HeaderContainerLight,
  HeaderThemeButtonLight,
  HeaderThemeButtonDark,
  HeaderProfile,
  HeaderLogoutButtonLight,
  HeaderLogoutButtonDark,
  PopupContainerDark,
  ConfirmButtonDark,
  CancelButtonDark,
  PopupContainerButtonDark,
  PopupParaDark,
  PopupContainerLight,
  ConfirmButtonLight,
  CancelButtonLight,
  PopupContainerButtonLight,
  PopupParaLight,
} from './styledComponents'

import AppContext from '../../context/AppContext'

const Header = props => (
  <AppContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const onClickLogout = () => {
        const {history} = props
        Cookies.remove('jwt_token')

        history.replace('/login')
      }

      const onToggleTheme = () => {
        toggleTheme()
      }

      return (
        <>
          {isDarkTheme ? (
            <HeaderBgDark>
              <Link to="/">
                <HeaderImageDark
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
                  alt="website logo"
                />
              </Link>
              <HeaderContainerDark>
                <HeaderThemeButtonDark
                  onClick={onToggleTheme}
                  data-testid="theme"
                >
                  <TiAdjustBrightness fontSize={30} color="white" />
                </HeaderThemeButtonDark>
                <HeaderProfile
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="profile"
                />

                <>
                  <Popup
                    modal
                    trigger={
                      <HeaderLogoutButtonDark type="button">
                        Logout
                      </HeaderLogoutButtonDark>
                    }
                  >
                    {close => (
                      <>
                        <PopupContainerDark>
                          <PopupParaDark>
                            Are you sure, you want to logout
                          </PopupParaDark>

                          <PopupContainerButtonDark>
                            <CancelButtonDark
                              type="button"
                              onClick={() => close()}
                            >
                              Cancel
                            </CancelButtonDark>
                            <ConfirmButtonDark
                              type="button"
                              onClick={onClickLogout}
                            >
                              Confirm
                            </ConfirmButtonDark>
                          </PopupContainerButtonDark>
                        </PopupContainerDark>
                      </>
                    )}
                  </Popup>
                </>
              </HeaderContainerDark>
            </HeaderBgDark>
          ) : (
            <HeaderBgLight>
              <Link to="/">
                <HeaderImageDark
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                  alt="website logo"
                />
              </Link>
              <HeaderContainerLight>
                <HeaderThemeButtonLight
                  onClick={onToggleTheme}
                  data-testid="theme"
                >
                  <CgDarkMode fontSize={30} />
                </HeaderThemeButtonLight>
                <HeaderProfile
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="profile"
                />
                <>
                  <Popup
                    modal
                    trigger={
                      <HeaderLogoutButtonLight type="button">
                        Logout
                      </HeaderLogoutButtonLight>
                    }
                  >
                    {close => (
                      <>
                        <PopupContainerLight>
                          <PopupParaLight>
                            Are you sure, you want to logout
                          </PopupParaLight>

                          <PopupContainerButtonLight>
                            <CancelButtonLight
                              type="button"
                              onClick={() => close()}
                            >
                              Cancel
                            </CancelButtonLight>
                            <ConfirmButtonLight
                              type="button"
                              onClick={onClickLogout}
                            >
                              Confirm
                            </ConfirmButtonLight>
                          </PopupContainerButtonLight>
                        </PopupContainerLight>
                      </>
                    )}
                  </Popup>
                </>
              </HeaderContainerLight>
            </HeaderBgLight>
          )}
        </>
      )
    }}
  </AppContext.Consumer>
)

export default withRouter(Header)
