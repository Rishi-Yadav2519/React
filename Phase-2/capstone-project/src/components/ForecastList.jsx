import useData from '../context/DataContext';

const ForecastList = () => {
  const {forecastData} = useData();
  
  console.log(forecastData);
  
  // Function to filter out unique forecasts for each day from the forecastData data
  const getUniqueForecasts = () => {
    const seen = new Set();
    return forecastData.list.filter((item) => {
      const date = item.dt_txt.split(' ')[0];
      if (seen.has(date)) return false;
      seen.add(date);
      return true;
    });
  };

  // Function to format date strings into the Indian date format (DD/MM/YYYY)
  const formatDateToIndian = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <div className='w-full relative bg-slate-100 h-max lg:w-[90%] sm:rounded-3xl dark:bg-slate-900 dark:text-white sm:h-max sm:py-2 lg:rounded-3xl '>
      {/* A carousel for forecastData items which work on both desktop and mobile */}
      <div className='flex h-max w-full overflow-x-auto scrollbar-hide gap-5 items-center justify-around p-5 sm:p-2'>
        {/* Shows only one forecastData item per day */}
        {getUniqueForecasts().map((item) => (
          <div key={item.dt} className='flex flex-col items-center justify-center bg-slate-200 rounded-2xl p-3 dark:bg-slate-700 gap-3 sm:text-sm sm:gap-1'>
            <p className=' font-semibold'>{formatDateToIndian(item.dt_txt.split(' ')[0])}</p>
            <img src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt="weather icon" className='w-10 h-10 bg-blue-500 rounded-full sm:h-7 sm:w-7' />
            <p className='text-sm'>{item.main.temp}°C</p>
          </div>
        ))}
      </div>
      {/* Gradient overlays for the carousel */}
      <div className='absolute top-0 left-0 h-full w-12 bg-linear-to-r from-neutral-400/30 to-transparent dark:from-slate-900 pointer-events-none lg:rounded-3xl'></div>
      <div className='absolute top-0 right-0 h-full w-12 bg-linear-to-l from-neutral-400/30 to-transparent dark:from-slate-900 pointer-events-none lg:rounded-3xl'></div>
    </div>
  )
}

export default ForecastList
