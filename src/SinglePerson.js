import React from 'react';
import { employees } from './data';
import { useParams, Link } from 'react-router-dom';

const SinglePerson = () => {
 const { peopleName } = useParams();
 const single = employees.find((employee) => employee.name === peopleName);
 const { name, job, image, age } = single;

 return (
  <section>
   <article className ='secondInfo'>
    <h2>More Info</h2>
    <figure>
            <img src={image} alt={name} className='img' title={`This is ${name}, a ${job}`} />
    </figure>
   
   <div className='info'>
     <h4>{name}</h4>
    <h4>{job}</h4>
    <h4> {age} Years Old</h4>
    <Link to='/people'>Back To List</Link>
   </div>
    
   </article>
  </section>

 )
}

export default SinglePerson;