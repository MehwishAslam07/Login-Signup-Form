import React from 'react'
import styles from './Signup.module.css'

const Signup = ({clickFunc})  => {
  return (


<div className={styles.sign}>
<h1>Sign Up</h1>
<div className={styles.signwrap}>

<form className={styles.formwrap}>

<input type="text" id="fname" name="fname" placeholder='enter name'/><br/><br/>

<input type="email" id="email" name="email" placeholder='email'/><br/><br/>

<input type="password" id="pwd" name="pwd" placeholder='enter password'/><br/><br/>

<input type="password" id="pwd" name="pwd" placeholder='repeat your password'/><br/><br/>

<input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>

<label for="vehicle1"> I agree all statements in terms of service.</label><br/><br/>

<input type="submit" value="Register"/>
</form>
<img className={styles.img1} src="https://cdn.pixabay.com/photo/2015/01/14/18/41/home-office-599475_1280.jpg"/>  
<a href="#" onClick={clickFunc}>Go to login screen</a>
</div>
</div>
  )
}

export default Signup