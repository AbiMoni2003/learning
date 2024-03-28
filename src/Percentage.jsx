import { useEffect, useState } from 'react';
import './percentage.css';
function Percentage(){
    const [work,setWork]=useState();
    const [absent,setAbsent]=useState();
    const [total,setTotal]=useState();
    const [grand,setGrand]=useState();
   
const Abi=(e)=>{
    if(e.target.name=="work"){setWork(e.target.value);}
    if(e.target.name=="abs"){setAbsent(e.target.value);}
    if(e.target.name=="button"){setTotal(work-absent);}
}

useEffect(()=>{setGrand(total/work*100)},[total])
    return(
        <div className='main-box'>
            <h3 className='heading'>Attendence Percentage</h3>
            <label>No.Of Working Day</label><br/>
            <input type="number" value={work} name='work' onChange={Abi}/><br/>
            <label>No.Of Absent Days</label><br/>
            <input type="number" value={absent} name='abs' onChange={Abi}/><br/>
            <button name='button' onClick={Abi} value={total}>Submit</button>
        <h4>Your percentage is {grand-2} to {grand+2}</h4>
        {grand}
        </div>
    );
}
export default Percentage;