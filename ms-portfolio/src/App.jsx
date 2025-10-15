import './App.css'
import { HashRouter as Router, Routes, Route } from 'react-router'
import AudioVisualizerShowCase from './Pages/AudioVisualizerShowCase.jsx'
import { HomePage } from './Pages/HomePage'

function App() {

  return (     
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/AudioVisual" element={<AudioVisualizerShowCase/>}/>

      </Routes>
    </Router>
  )
}

export default App
