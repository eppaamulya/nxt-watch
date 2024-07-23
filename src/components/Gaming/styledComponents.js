import styled from 'styled-components'

export const GameBgContainerLight = styled.div`
  background-color: #f9f9f9;
  height: 100vh;
  background-size: cover;
  display: flex;
  flex-direction: row;
`

export const GameBgContainerDark = styled.div`
  background-color: #0f0f0f;
  height: 100vh;
  background-size: cover;
  display: flex;
  flex-direction: row;
`

export const GameContainerLight = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f9f9f9;
  overflow-y: scroll;
`

export const GameContainerDark = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #0f0f0f;
  overflow-y: scroll;
`

export const GameContainerLight1 = styled.div`
  background-color: #ebebeb;
  height: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 30px;
  margin-top: 0px;
`

export const GameContainerDark1 = styled.div`
  background-color: #181818;
  height: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 30px;
  margin-top: 0px;
  margin-left: 0px;
`
export const GameHeadingLight = styled.h1`
  font-size: 30px;
  color: #181818;
  margin-left: 30px;
`

export const GameIconLight = styled.button`
  display: flex;
  align-self: center;
  font-size: 30px;
  height: 65px;
  width: 65px;
  padding: 20px;
  border-radius: 35px;
  background-color: #d7dfe9;
  color: #ff0000;
  margin-left: 50px;
  border: none;
`

export const GameHeadingDark = styled.h1`
  font-size: 30px;
  color: #ffffff;
  margin-left: 30px;
`

export const GameIconDark = styled.button`
  font-size: 30px;
  height: 65px;
  width: 65px;
  padding: 20px;
  border-radius: 35px;
  background-color: #0f0f0f;
  color: #ff0000;
  margin-left: 50px;
  border: none;
  display: flex;
  align-self: center;
`

export const GameUnlistContainer = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

export const GameListContainer = styled.ul`
  width: 250px;
  height: 400px;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  margin: 20px;
`

export const GameImage = styled.img`
  width: 250px;
  height: 300px;
`

export const GameTitleLight = styled.p`
  font-size: 16px;
  padding-top: 5px;
  padding-left: 15px;
  padding-bottom: 0px;
  margin-bottom: 0px;
  font-weight: 500;
`

export const GameTitleDark = styled.p`
  font-size: 16px;
  padding-top: 5px;
  padding-left: 15px;
  padding-bottom: 0px;
  margin-bottom: 0px;
  font-weight: 500;
  color: #ffffff;
`

export const GameViews = styled.p`
  font-size: 16px;
  padding-top: 0px;
  padding-left: 15px;
  color: #616e7c;
`

export const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 300px;
`

export const FailureContainerLight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;
  background-color: #f9f9f9;
  margin: 200px;
  padding: 50px;
`
export const FailureContainerDark = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #0f0f0f;
  margin: 200px;
  justify-content: center;
  align-items: center;
  align-self: center;
  padding: 50px;
`
export const FailureImageLight = styled.img`
  width: 500px;
  height: 350px;
`

export const FailureImageDark = styled.img`
  width: 500px;
  height: 350px;
`

export const FailureHeadingLight = styled.h1`
  font-size: 30px;
  margin-top: 40px;
  color: #231f20;
`

export const FailureHeadingDark = styled.h1`
  font-size: 30px;
  margin-top: 40px;
  color: #ffffff;
`

export const FailureParaLight = styled.p`
  font-size: 18px;
  color: #475569;
  margin-top: 0px;
  text-align: center;
`

export const FailureParaDark = styled.p`
  font-size: 18px;
  color: #ebebeb;
  margin-top: 0px;
  text-align: center;
`

export const FailureButton = styled.button`
  width: 120px;
  height: 40px;
  color: white;
  background-color: #3b82f6;
  border: none;
  border-radius: 5px;
`
