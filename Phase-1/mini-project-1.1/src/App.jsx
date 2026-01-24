import './App.css'
import GreetingsCard from './components/GreetingsCard'

function App() {

  // Fetching the current hour through Date function
  const currentHour = new Date().getHours()

  return (
    <div className='flex w-full h-screen items-center justify-center'>
      {/* Passing name, age and the hour fetched above as props to our component */}
      <GreetingsCard name={"Rishi"} age={24} hour={currentHour}/>
    </div>
  )
}

export default App
