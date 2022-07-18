import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./Navbar.module.css" 

const Navbar = () => {
  return (
    <div> 
    <br/>
    <div className={styles.maindiv}>
     <Link className={styles.left} to="">ToDoList</Link>
     <Link  className={styles.right} to='/undone'>Undone</Link>
     <Link  className={styles.right} to='/done'>Done</Link>
     <Link  className={styles.right} to='/'>All</Link>
     </div>
   
    
    </div>
  )
}

export default Navbar