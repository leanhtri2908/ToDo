import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import TodoList from './Pages/TodoList';
import { HomePage } from './Pages/Home'
import { About } from './Pages/About';
import TimeLine from './Pages/TimeLine';
function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <nav class = "navbar">
             <Link to='/home' className='mylink'>Home</Link> 
            <Link to='/about' className='mylink'>About</Link>
            <Link to='/Todo' className='mylink'>Todo</Link>
            <Link to='/TimeLine' className='mylink'>TimeLine</Link>
          </nav>
            <Routes>
               <Route exact path='/' element={<HomePage/>} /> 
              <Route exact path='/about' element={<About />} />
              <Route exact path='/home' element={<HomePage/>} />
              <Route exact path='/Todo' element={<TodoList/>} />
              <Route exact path='/TimeLine' element={<TimeLine/>} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;