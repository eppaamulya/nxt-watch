import React from 'react'

const AppContext = React.createContext({
  isDarkTheme: false,
  videoList: [],
  toggleTheme: () => {},
  saveVideo: () => {},
  unSaveVideo: () => {},
})

export default AppContext
