import React from 'react'
import FavoritesList from './FavoritesList'
import CurrentWeather from './CurrentWeather'

const Content = () => {

  return (
    <div className='w-full h-screen flex dark:bg-slate-800'>
      <CurrentWeather />
      <div className='favoritesContainer w-[20vw] h-screen fixed right-0 hidden dark:bg-slate-900 bg-neutral-100 lg:flex'>
        <FavoritesList />
      </div>
    </div>
  )
}

export default Content
