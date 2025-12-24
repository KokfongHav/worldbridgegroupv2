import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Layout from './Components/Layout/Layout'
import Home from './Pages/Home.tsx'
import Whoweare from './Pages/Whoweare.tsx'
import Ourbusiness from './Pages/Ourbusiness.tsx'
import Ourcontent from './Pages/Ourcontent.tsx'

function App() {

  return (
    <div className="App w-screen h-screen" >
      <BrowserRouter>
        <Routes>
            <Route element= {<Layout />}>
            <Route path='/' element={<Home/>} />
            <Route path='/whoweare' element={<Whoweare/>} />
            <Route path='/ourbusiness' element={<Ourbusiness/>} />
            <Route path='/ourcontent' element={<Ourcontent/>} />
            </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
