import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Home';
import People from './People';
import SinglePerson from './SinglePerson';
import Error from './Error';
import Contacts from './Contacts';
import Navbar from './Navbar';

const App = ()=>{
 return(
  <BrowserRouter>
  <Navbar/>
  <Routes>
   <Route path='/' element={<Home/>}/>
   <Route path='/people' element={<People/>}/>
   <Route path='/people/:peopleName' element={<SinglePerson/>}/>
   <Route path='/contacts' element={<Contacts/>}/>
   <Route path='*' element={<Error/>}/>
  </Routes>
  </BrowserRouter>
 )
}
export default App;