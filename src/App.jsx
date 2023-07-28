import { useState } from 'react'
import Header from './component/header/header'
import './App.css'
import Herosection from './pages/landingpage/herosection'
import Carousel from './component/slides/carousel'
import Summeroff from './component/summeroff'
import Services from './component/services'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className=' w-screen '>
        <Header/>
      </div>
      <main className='h-screen w-screen'>
        <Herosection />
        <Carousel/>
        <Summeroff/>
        <Services/>
      </main>
    </>
  )
}

export default App
