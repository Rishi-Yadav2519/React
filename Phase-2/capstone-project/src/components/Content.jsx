import React from 'react'
import FavoritesList from './FavoritesList'
import CurrentWeather from './CurrentWeather'

const Content = () => {

  return (
    // Main container for the content of the app, including the current weather and the favorites list
    <div className='w-full flex dark:bg-slate-800 sm:h-max'>
      <CurrentWeather />
      <div className='favoritesContainer w-[20vw] h-screen fixed right-0 hidden dark:bg-slate-900 bg-neutral-100 lg:flex'>
        <FavoritesList />
      </div>
    </div>
  )
}

export default Content
