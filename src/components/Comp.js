import React from 'react'
import {useContext,useState} from 'react';
import { studentcontext } from '../App';
const Comp = () => {
    const [n,setnew] = useState('');
    const [student,setstudent] = useContext(studentcontext);
    const sub = (e) => {
        e.preventDefault();
        setstudent([...student,{name:n}]);
        alert("Added");
        setnew("");
    }
    console.log(student)
  return (
    <div>
        <ul>
            <li>Hey</li>
            {student ? student.map((key,object)=>{
                return (
                    <li>{key.name}</li>
                )
            }):null}

        </ul>
        <form>
            <input type="text" value={n} onChange={(e)=>{setnew(e.target.value)}} />
            <input type="submit" onClick={sub} />
        </form>
    </div>
  )
}

export default Comp