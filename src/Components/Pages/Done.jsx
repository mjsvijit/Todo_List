import React,{useContext,useEffect} from 'react'
import { AuthContext } from '../../Auth/AuthContext'
import InputTodo from '../Todo/InputTodo'
import style from '../Todo/TodoList.module.css'



const green={
   textDecoration:"line-through solid black",
  height:"35px",
  marginTop:"5px",
  borderLeft:" 15px solid green",
  fontSize:"15px",
  backgroundColor:"black",

}

const red={
 
  height:"35px",
  borderLeft:" 15px solid red",
  marginTop:"5px",
  backgroundColor:"black",
  fontSize:"15px",

}


const Done = () => {
  const [fdata, setFdata] = React.useState([])

  const {
      pdone,
      handleDelete,
      handleMark,
      taskupdater,
      isVis,
      isVisNot,
      count
  }=useContext(AuthContext)

 

 const handleUpdate=(task)=>{
  taskupdater(task);
  isVis();
  isVisNot();
  
}
  useEffect(()=>{
    var filteredData = pdone.filter(function (item)
{
  return item.status ==="true";
         
}
);
setFdata(filteredData)
  },[count])
 
  return (
    <div>
    <InputTodo />
    <div className={style.maindiv}>
  
    {
      fdata.map((task)=>( 
          
          <div className={style.listdiv} key={task.id} style={(task.status==="true")?green:red}>
         
          <p onClick={()=>handleMark(task)}>{task.title}</p> 
         

            <div>
            <button  className={style.set} onClick={()=>handleDelete(task)}>Delete</button>
            <button className={style.met} onClick={()=>handleUpdate(task)}>Update</button>
            
            </div>
           
           
             
          </div>
          
      ))
  }
    
    </div>
    
    
    </div>
    
  )
}

export default Done