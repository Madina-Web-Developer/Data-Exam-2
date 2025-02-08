import React, { useEffect, useState } from 'react'
import { getDatabase, onValue, push, ref, remove, set } from "firebase/database";


const Cards = () => {

  // ---------Custom Variables

const [data , setdata]= useState({Todo:''})

const [error, seterror]=useState({TodoError:''})

const [Output, SetOutput] = useState([])



// ------------ Firebase Variables
const db = getDatabase();



// ----------- Function add button & Realtime Database

const handelsubmit=()=>{

  if(data.Todo == ''){

    seterror((prev)=>({...prev, TodoError:'please enter your text'}))
  }
  else{
        
    set(push(ref(db, 'AllTodo/')), {

      Todo:data.Todo

    });

  }

  setdata((prev)=>({...prev, Todo:''}))
  
}



// -------------------------- Delete Button & Function of Realtime Database


useEffect(()=>{

  onValue(ref(db, 'AllTodo/'), (snapshot) => {

    let arr =[]

    snapshot.forEach((item)=>{
      arr.push({...item.val(), key:item.key})
    })
    SetOutput(arr)
  });

},[])

// ---------------- Delete Button

const handelDeleta =(item)=>{

  remove(ref(db, 'AllTodo/' + item.key))

}



  return (
   <>
   <div className="container">

    <div className="mina flex  flex-col">

        <div className="card w-[500px] flex h-[70px] justify-center items-center gap-5">
          <input value={data.Todo}  onChange={(e)=>{setdata((prev)=>({...prev, Todo:e.target.value})), seterror((prev)=>({...prev, TodoError:''}))}} type="email" className='input w-[500px] border-2 border-blue-500 h-[60px] pl-[20px] ' placeholder='Enter your text'/>
          <button onClick={handelsubmit} className='button bg-sky-500 px-[25px] py-[12px] text-white active:scale-[1.1]  font-semibold rounded-sm'>Add</button>
        </div>
       
       <p className='text-[15px]  text-red-500'>{error.TodoError}</p>
    </div>

    {/* -------------Output Field ----------------------------------------------------*/}
     
     {
          Output.map((item)=>(

    <div key={item.key} className="output_text flex mt-5  items-center gap-5">
         <p className='text-[22px] w-[400px] font-semibold text-black'>{item. Todo}</p>
         <button onClick={()=>handelDeleta(item)}  className='button bg-red-500  text-white px-[25px] py-[12px] active:scale-[1.1]  font-semibold rounded-sm'>Delete</button>
       </div>
          ))

     }


   </div>
   </>
  )
}

export default Cards