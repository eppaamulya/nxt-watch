import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import {
  LoginContainerLight,
  LoginContainerDark,
  LoginContainerLight1,
  LoginContainerDark1,
  LoginImage,
  FormContainer,
  LabelLight,
  LabelDark,
  InputLight,
  InputDark,
  CheckboxContainer,
  Check,
  Error,
  ShowPasswordLight,
  ShowPasswordDark,
  LoginButton,
} from './styledComponents'

import AppContext from '../../context/AppContext'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showPassword: false,
    errorMsg: '',
    showSubmitError: false,
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onChangeShowPassword = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {expires: 90})

    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  submitLogin = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    console.log(response)

    const data = await response.json()

    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  renderLogin = () => (
    <AppContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const {
          username,
          password,
          showPassword,
          showSubmitError,
          errorMsg,
        } = this.state

        return (
          <>
            {isDarkTheme ? (
              <LoginContainerDark>
                <LoginContainerDark1>
                  <LoginImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
                    alt="website logo"
                  />
                  <FormContainer onSubmit={this.submitLogin}>
                    <LabelDark htmlFor="name">USERNAME</LabelDark>
                    <InputDark
                      type="text"
                      id="name"
                      placeholder="Username: rahul"
                      value={username}
                      onChange={this.onChangeUsername}
                    />
                    <LabelDark htmlFor="password">PASSWORD</LabelDark>
                    <InputDark
                      id="password"
                      placeholder="Password: rahul@2021"
                      value={password}
                      onChange={this.onChangePassword}
                      type={showPassword ? 'text' : 'password'}
                    />
                    <CheckboxContainer>
                      <Check
                        type="checkbox"
                        id="myCheckbox"
                        onChange={this.onChangeShowPassword}
                      />
                      <ShowPasswordDark htmlFor="myCheckbox">
                        Show Password
                      </ShowPasswordDark>
                    </CheckboxContainer>
                    <LoginButton type="submit">Login</LoginButton>
                    {showSubmitError && <Error>*{errorMsg}</Error>}
                  </FormContainer>
                </LoginContainerDark1>
              </LoginContainerDark>
            ) : (
              <LoginContainerLight>
                <LoginContainerLight1>
                  <LoginImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                    alt="website logo"
                  />
                  <FormContainer onSubmit={this.submitLogin}>
                    <LabelLight htmlFor="name">USERNAME</LabelLight>
                    <InputLight
                      type="text"
                      id="name"
                      placeholder="Username: rahul"
                      value={username}
                      onChange={this.onChangeUsername}
                    />
                    <LabelLight htmlFor="password">PASSWORD</LabelLight>
                    <InputLight
                      id="password"
                      placeholder="Password: rahul@2021"
                      value={password}
                      onChange={this.onChangePassword}
                      type={showPassword ? 'text' : 'password'}
                    />
                    <CheckboxContainer>
                      <Check
                        type="checkbox"
                        id="myCheckbox"
                        onChange={this.onChangeShowPassword}
                      />
                      <ShowPasswordLight htmlFor="myCheckbox">
                        Show Password
                      </ShowPasswordLight>
                    </CheckboxContainer>
                    <LoginButton type="submit">Login</LoginButton>
                    {showSubmitError && <Error>*{errorMsg}</Error>}
                  </FormContainer>
                </LoginContainerLight1>
              </LoginContainerLight>
            )}
          </>
        )
      }}
    </AppContext.Consumer>
  )

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return <>{this.renderLogin()}</>
  }
}

export default Login
