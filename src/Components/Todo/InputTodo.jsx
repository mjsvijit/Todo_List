import React,{useState,useContext} from 'react'
import { AuthContext } from '../../Auth/AuthContext'
import style from './InputTodo.module.css';

const InputTodo = () => {
    const [data, setData] = useState("")
    const {
        incCount,
        isVisible,
        isNot,
        isVisNot,
        isVis,
        uid
    }=useContext(AuthContext);

    const handleAdd =()=>{
        if(data===""){
            alert("Please Enter Some Thing!")
        }else{ 
    
        fetch('https://mytodolistapple.herokuapp.com/posts',{
            method:'POST',
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(
                {
                    "title":data,
                    "status":"false"
                }
            )
        }).then(()=>{
            console.log(data);
            setData("");
            incCount(1);
        })
    }
    }
 
    const handleChange = ()=>{
        if(data===""){
            alert("Please Enter Some Thing!")
        }else{ 
       
        fetch(`https://mytodolistapple.herokuapp.com/posts/${uid}`,{
            method:'PUT',
            headers:{
                "Content-Type":'application/json',
            },
            body:JSON.stringify({
               "title":data
            })
        }).then(()=>{
                  incCount(1);
                  isVisNot();
                  isVis();
                  setData("");
        })
    }
    }


  return (
    <div>
    <input  className={style.input} value={data} placeholder='Enter Todo' onChange={(e)=>setData(e.target.value)} />
    {isVisible && ( 
    <button  className={style.button} onClick={handleAdd}>ADD</button>
    )}
    {isNot && (
        <button  className={style.button} onClick={handleChange} >Edit Item</button>
    )}
    
    </div>
  )
}

export default InputTodo