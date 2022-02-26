import React, { useEffect, useState } from 'react'
import FacebookLogin from 'react-facebook-login';

const FuncFacebook = () => {
    const [values, setValues] = useState({
        isLoggedIn:false,
        userID:'',
        name:'',
        email:'',
        picture:''
    });
    const [fbContent, setFbContent] = useState("");
    const  responseFacebook = (response)=> {
       setValues({
           isLoggedIn:true,
           userID:response.userID,
           name:response.name,
           email:response.email,
           picture:response.picture.data.url
        })
     }
     const   componentClicked= ()=> console.log("clicked")
useEffect(() => {

    if(values.isLoggedIn){
        localStorage.setItem('isLoggedin',values.isLoggedIn)
        localStorage.setItem('name', values.name)

        setFbContent(  <div class="card">
        <div class="container">
          <h4><b>{localStorage.getItem('name')}</b></h4>
    
        </div>
      </div>)
          

    }else {
        setFbContent(<FacebookLogin
                appId="465359411909887"
                autoLoad={true}
                fields="name,email,picture"
                onClick={componentClicked}
                callback={responseFacebook} />)
    }
}, [])

  return (
    <div>{fbContent}</div>
  )
}

export default FuncFacebook