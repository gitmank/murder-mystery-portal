import './App.css';
import Home from './Home'
import Actions from './Actions'
import Info from './Info';
import Rules from './Rules'
import { Routes, Route } from 'react-router-dom'
import Results from './Results.jsx';
import Leaderboard from './Leaderboard';
const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/actions' element={<Actions />}/>
        <Route path='/info' element={<Info />}/>
        <Route path='/rules' element={<Rules />}/>
        <Route path='/leaderboard' element={<Leaderboard />}/>
        <Route path='/results' element={<Results />}/>
        <Route path='/*' element={<div className='not-found'>404 NOT FOUND</div>}/>
      </Routes>
    </>
  );
}

export default App;
