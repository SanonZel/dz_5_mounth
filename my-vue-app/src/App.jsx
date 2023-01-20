import ColorStrix from './ColorStrix'
import SwapComp from './SwapComp'
import './App.css'

function App() {
  const FullComp = ColorStrix(SwapComp)

  return (
    <div className="App">
      <FullComp/>
    </div>
  )
}

export default App
