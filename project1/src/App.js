import Home from './Components/Home.js'
import Login from './Components/Login.js'
import { Routes, Route } from 'react-router-dom'
import Nav from './Components/nav.js'
import Foot from './Components/footer.js'
import Movies from './Components/movies.js'
import Contact from './Components/Contact.js'
import Signup from './Components/Signup.js'
function App(){
    return(
        <>
            <Nav/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='Movies' element={<Movies/>}/>
                <Route path='Login' element={<Login/>}/>
                <Route path='Contact' element={<Contact/>}/>
                <Route path='Signup' element={<Signup/>}/>
            </Routes>
            <Foot/>
        </>
    );
}
export default App;