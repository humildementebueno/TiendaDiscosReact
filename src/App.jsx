import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Container from './Components/Container'
import Home from './Components/Home'
import Nopage from './Components/Nopage'
import Form from './Components/Form'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Container/>}>
          <Route index element={<Home/>}></Route>
          <Route path='contact' element={<Form/>}></Route>
          <Route path='*' element={<Nopage/>}></Route>
        </Route>
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
