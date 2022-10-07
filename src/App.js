import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './component/Home'
import Links from './component/Links';
import UniversitiesList from './component/universities/UniversitiesList';
import UniversityInfo from './component/universities/UniversityInfo';
import UniversityFilter from './component/universities/UniversityFilter';

function App() {
  return (
    <div className='container'>
    <Router>
      <Links/>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/Universities' element={<UniversitiesList/>} />
        <Route exact path='/Universities/:name' element={<UniversityInfo/>} />
        <Route exact path='/search/:query' element={<UniversityFilter/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
