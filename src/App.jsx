
import './App.css'
import Addtodo from './components/Addtodo'
import ToDo from './components/ToDo'

function App() {
return(
  <div className='bg-cyan-800  min-h-screen'>
    <h1 className='flex items-center justify-center text-2xl  p-4 text-stone-100 
    '>TO DO LIST REDUX TOOLKIT</h1>
 <Addtodo/>
 <ToDo/>

  </div>
)
}

export default App
