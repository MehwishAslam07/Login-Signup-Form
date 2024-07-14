import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import styles from './Login.module.css'


const Login = ({clickFunc}) => {
  return (
   


     <div className={styles.sign}>
     <h1>Login</h1>

     <div className={styles.signwrap}>
         <div className={styles.loginleft}> 
         <img className={styles.img1} src="https://cdn.pixabay.com/photo/2015/01/14/18/41/home-office-599475_1280.jpg"/>  
         <a href="#" onClick={clickFunc}>Create an account</a>

         </div>


<form className={styles.formwrap}>
<FontAwesomeIcon icon={faUser} />

<input type="text" id="fname" name="fname" placeholder='enter name'/><br/><br/>

<input type="password" id="pwd" name="pwd" placeholder='enter password'/><br/><br/>

<input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>

<label for="vehicle1"> Remember Me</label><br/><br/>

<input type="submit" value="Login" ></input>


</form>
</div>
   </div>
    
  )
}

export default Login

