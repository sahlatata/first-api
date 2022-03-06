import './App.css';
import ListUser from './components/ListUsers';
import NavBarUser from './components/NavBarUser';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import User from './components/User';

function App() {
  return (
    <div >
    <NavBarUser/>
    <Routes>
    <Route path='/' element={<Home/>}/> 
    <Route path='/users' element={<ListUser/>}/>
    <Route path='/users/:id' element={<User/>}/>
    </Routes> 
    
    </div>
  );
}

export default App;
