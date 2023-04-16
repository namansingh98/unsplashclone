import Navbar from "./components/Navbar/Navbar"
import "./App.css"
import Header from "./components/Header/Header"
import Searching from "./components/Search/Searching"

function App() {

  return (
    <div className="App">
     <Navbar/>
    
     <Header/>
     <Searching/>
    </div>
  )
}

export default App
