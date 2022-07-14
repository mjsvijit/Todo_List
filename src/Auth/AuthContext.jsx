import React,{createContext, useState,useEffect} from 'react'

export const AuthContext=createContext();

export const AuthContextProvider = ({children}) => {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(true);
    const [isNot, setIsNot] = useState(false);
    const [uid,setUid]=useState(0);
    const [pdone,setPdone]=useState([]);

    const incCount=(data)=>{
           setCount(count+1);
    }

    const isVis =()=>{
        (isVisible===true ? setIsVisible(false) : setIsVisible(true))
       setIsVisible(isVisible===true ? false : true);
    }

    const isVisNot =()=>{
       setIsNot((isNot===true ? false : true))
       
    }

    const taskupdater =(item)=>{
        console.log(item.id);
        setUid(item.id);
    }

    const datageting=(item)=>{
       setPdone(item)
    }


    const handleMark=(task)=>{
        const val=((task.status==="false")? "true" : "false");
       fetch(`http://localhost:3000/posts/${task.id}`,{
           method:'PUT',
           headers:{
               "Content-Type":'application/json',
           },
           body:JSON.stringify({
               "title":task.title,
              "status":val
           })
       }).then(()=>{
           incCount(1)
           
          
       })
    }

    const handleDelete=(task)=>{
        fetch(`http://localhost:3000/posts/${task.id}`,{
            method:'DELETE',
            headers:{
                "Content-Type":'application/json',
            },
            body:JSON.stringify({
                ...task
            })
        }).then(()=>{
                  incCount(1);
                 
        })
     }

     useEffect(() => {
        fetch('http://localhost:3000/posts')
        .then((res)=>res.json())
        .then((data)=>datageting(data));
     }, [count])
    
 
  return <AuthContext.Provider value={
      {
          incCount,
          count,
          isNot,
          isVis,
          isVisNot,
          isVisible,
          taskupdater,
          uid,
          datageting,
          pdone,
          handleMark,
          handleDelete
      }
  }>{children}</AuthContext.Provider>
}

