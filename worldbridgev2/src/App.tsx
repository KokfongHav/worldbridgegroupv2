import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Layout from './Components/Layout/Layout'
import Home from './Pages/Home/Home'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route element= {<Layout />}>
            <Route path='/' element={<Home/>} />
            </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
