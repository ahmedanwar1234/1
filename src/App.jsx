import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
   <main className=' h-dvh'>
<img src="/gradient.png" className=' absolute top-0 right-0 opacity-60 -z-10' alt="Gradient-ig" />

{/* blur Effect */}
<div className=' h-0 w-[40rem] absolute top-[20%] right-[-5%] shadow-[0_0_900px_20px_#e99b63] -rotate-[30deg] -z-10'></div>
<Header/>
<Hero/>
   </main>
  )
}

export default App
