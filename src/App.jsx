import "./App.css"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import {Toaster} from 'react-hot-toast'
import Home from "./pages/Home"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
      <Toaster>

      </Toaster>
    </Router>
  )
}

export default App