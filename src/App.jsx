import './App.css'
import Navbar from './component/Navbar'
import Body from './component/Body'
import Footer from './component/Footer'
import Header from './component/Header'

function App() {      
  return (
    <div className='m-0 p-0 h-[3240px] box-border overflow-hidden'>  
        <Navbar/>
        <Header/>                      
        <Body/>
        <Footer/>
    </div>
  )
}

export default App
