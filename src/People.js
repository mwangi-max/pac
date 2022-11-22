import React from 'react';
import {employees} from './data';
import {Link} from 'react-router-dom';

const People = ()=>{
 return(
  <section>
   <article>
    <h2>This are our {employees.length} dear members</h2>
     {
      employees.map((employee)=>{
       const {id,name,job} = employee;
       return <div key = {id} className='firstInfo'>
        <h4>{name}</h4>
        <h4>{job}</h4>
        <Link to={`/people/${name}`}>More Info</Link>
       </div>
      })
     }
   </article>
  </section>

 )
}
export default People;