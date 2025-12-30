  import './App.css'
import Card from './components/card'
import Navbar from './components/navbar'  

function App() {
  
   return (
    <div>
      <Navbar />
      <div className="cards-container">
        <Card />
        <Card />
      </div>
    </div>
   )
  
}

export default App
