import React,{useContext} from 'react'
import { AuthContext } from '../../Auth/AuthContext';
import style from './TodoList.module.css'

const green={
    textDecoration:"line-through solid white",
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





const TodoList = () => {
  
  

    const {
      
        taskupdater,
        isVis,
        isVisNot,
       
        pdone,
        handleMark,
        handleDelete
    }=useContext(AuthContext)

    
    
    const handleUpdate=(task)=>{
        taskupdater(task);
        isVis();
        isVisNot();
        
     }


    

     

 

  return (
    <div className={style.maindiv}>
                   {
                       pdone.map((task)=>( 
                           
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
  )
}

export default TodoList