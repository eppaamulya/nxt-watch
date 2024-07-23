import {Link} from 'react-router-dom'

import {TiHome} from 'react-icons/ti'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {CgPlayListAdd} from 'react-icons/cg'

import {
  SideBgContainerLight,
  SideBgContainerDark,
  SideUnlistContainer,
  SideListContainer,
  SideContainer,
  SideNamesLight,
  SideNamesDark,
  SideDownContainer,
  SideParaLight,
  SideParaLight1,
  SideParaDark,
  SideParaDark1,
  SideDownUnListContainer,
  SideIcons,
} from './styledComponents'

import AppContext from '../../context/AppContext'

const SideBar = () => (
  <AppContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const sideContainer = isDarkTheme
        ? 'side-container-dark'
        : 'side-container-light'
      const sidebarNames = isDarkTheme
        ? 'sidebar-names-dark'
        : 'sidebar-names-light'
      const sideHeading = isDarkTheme
        ? 'side-heading-dark'
        : 'side-heading-light'
      const sidePara = isDarkTheme ? 'side-para-dark' : 'side-para-light'

      return (
        <>
          {isDarkTheme ? (
            <SideBgContainerDark>
              <SideUnlistContainer>
                <SideListContainer>
                  <Link to="/" style={{textDecoration: 'none'}}>
                    <SideContainer>
                      <TiHome fontSize={23} color="#606060" />
                      <SideNamesDark>Home</SideNamesDark>
                    </SideContainer>
                  </Link>
                </SideListContainer>

                <SideListContainer>
                  <Link to="/trending" style={{textDecoration: 'none'}}>
                    <SideContainer>
                      <HiFire fontSize={23} color="#606060" />
                      <SideNamesDark>Trending</SideNamesDark>
                    </SideContainer>
                  </Link>
                </SideListContainer>

                <SideListContainer>
                  <Link to="/gaming" style={{textDecoration: 'none'}}>
                    <SideContainer>
                      <SiYoutubegaming fontSize={23} color="#606060" />
                      <SideNamesDark>Gaming</SideNamesDark>
                    </SideContainer>
                  </Link>
                </SideListContainer>

                <SideListContainer>
                  <Link to="/saved-Videos" style={{textDecoration: 'none'}}>
                    <SideContainer>
                      <CgPlayListAdd fontSize={23} color="#606060" />
                      <SideNamesDark>Saved Videos</SideNamesDark>
                    </SideContainer>
                  </Link>
                </SideListContainer>
              </SideUnlistContainer>
              <SideDownContainer>
                <SideParaDark>CONTACT US</SideParaDark>
                <SideDownUnListContainer>
                  <SideIcons
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                    alt="facebook logo"
                    className="side-logo"
                  />

                  <SideIcons
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                    alt="twitter logo"
                    className="side-logo"
                  />

                  <SideIcons
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                    alt="linked in logo"
                    className="side-logo"
                  />
                </SideDownUnListContainer>
                <SideParaDark1 className={sidePara}>
                  Enjoy! Now to see your channels and recommendations!
                </SideParaDark1>
              </SideDownContainer>
            </SideBgContainerDark>
          ) : (
            <SideBgContainerLight>
              <SideUnlistContainer>
                <SideListContainer>
                  <Link to="/" style={{textDecoration: 'none'}}>
                    <SideContainer>
                      <TiHome fontSize={23} color="#606060" />
                      <SideNamesLight>Home</SideNamesLight>
                    </SideContainer>
                  </Link>
                </SideListContainer>

                <SideListContainer>
                  <Link to="/trending" style={{textDecoration: 'none'}}>
                    <SideContainer>
                      <HiFire fontSize={23} color="#606060" />
                      <SideNamesLight>Trending</SideNamesLight>
                    </SideContainer>
                  </Link>
                </SideListContainer>

                <SideListContainer>
                  <Link to="/gaming" style={{textDecoration: 'none'}}>
                    <SideContainer>
                      <SiYoutubegaming fontSize={23} color="#606060" />
                      <SideNamesLight>Gaming</SideNamesLight>
                    </SideContainer>
                  </Link>
                </SideListContainer>

                <SideListContainer>
                  <Link to="/saved-Videos" style={{textDecoration: 'none'}}>
                    <SideContainer>
                      <CgPlayListAdd fontSize={23} color="#606060" />
                      <SideNamesLight>Saved Videos</SideNamesLight>
                    </SideContainer>
                  </Link>
                </SideListContainer>
              </SideUnlistContainer>
              <SideDownContainer>
                <SideParaLight>CONTACT US</SideParaLight>
                <SideDownUnListContainer>
                  <SideIcons
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                    alt="facebook logo"
                    className="side-logo"
                  />

                  <SideIcons
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                    alt="twitter logo"
                    className="side-logo"
                  />

                  <SideIcons
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                    alt="linked in logo"
                    className="side-logo"
                  />
                </SideDownUnListContainer>
                <SideParaLight1 className={sidePara}>
                  Enjoy! Now to see your channels and recommendations!
                </SideParaLight1>
              </SideDownContainer>
            </SideBgContainerLight>
          )}
        </>
      )
    }}
  </AppContext.Consumer>
)

export default SideBar
