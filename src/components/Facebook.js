import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login';

export default class Facebook extends Component {
  state={
      isLoggedIn:false,
      userID:'',
      name:'',
      email:'',
      picture:''
  }
  fbContent=""

  responseFacebook = (response)=> {
     this.setState({
        isLoggedIn:true,
        userID:response.userID,
        name:response.name,
        email:response.email,
        picture:response.picture.data.url
     })
  }
componentDidMount(){
    if(this.state.isLoggedIn){
        localStorage.setItem('isLoggedin', this.state.isLoggedIn)
        localStorage.setItem('name', this.state.name)

        fbContent=(
            <div class="card">
            <div class="container">
              <h4><b>{localStorage.getItem('name')}</b></h4>
        
            </div>
          </div>
        )
    }else {
            fbContent= ( <FacebookLogin
                appId="your app id here from developer.facebook.com"
                autoLoad={true}
                fields="name,email,picture"
                onClick={this.componentClicked}
                callback={this.responseFacebook} />)
    }
}
  componentClicked= ()=> console.log("clicked")
    render() {
      
    return (
      <div>{fbContent}</div>
    )
  }
}
