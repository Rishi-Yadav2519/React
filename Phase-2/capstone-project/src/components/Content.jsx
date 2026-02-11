import React from 'react'
import FavoritesList from './FavoritesList'
import CurrentWeather from './CurrentWeather'
import useData from '../context/DataContext';
import Loading from './Loading';

const Content = () => {

  const {loading, error} = useData();

  if (loading) return <Loading />; 
  if (error) return <div className="w-full h-screen flex justify-center items-center"><p className="text-red-500 text-lg">Error: {error?.message || String(error)}</p></div>; 
  
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
