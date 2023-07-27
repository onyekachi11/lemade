import { useState } from 'react'
import Header from './component/header/header'
import './App.css'
import Herosection from './pages/landingpage/herosection'
import Slides from './component/slides/slides'
import Carousel from './component/slides/carousel'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className=' w-screen '>
        <Header/>
      </div>
      <main className='h-screen w-screen'>
        <Herosection />
        {/* <Slides/> */}
        <Carousel/>
      </main>
    </>
  )
}

export default App
