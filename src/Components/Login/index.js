import React, {useState, useEffect} from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import NewButton from './NewButton';
import imageLogin from './../../assets/images/Data_points-cuate.png';
import logo from './../../assets/images/logo-neo.svg';
import AlertLogin from './alert';


export default function Login(){
  const [loginInfo, setloginInfo] = useState({});
  const [loginError, setloginError] = useState(false);
  const [errorMessage, seterrorMessage] = useState("")
  let userLogin = {}


  function onChangeHandler(event){
    let value = event.target.value 
    let name = event.target.name
    userLogin[name] = value
  
  }

  function sendLoginInfo(){
    setloginInfo(userLogin)
    login(userLogin)

  }

 async function login(userLogin){
   await fetch("http://localhost:8080/auth/admin/login", {
      headers: {
        'Content-Type': 'application/json'
      },
      method:"POST",
      body: JSON.stringify(userLogin)
    })
    
    .then( response => {
      if (!response.ok) {
        return response.json()
        .then(error => { throw new Error(error.message) })
      }
      return response.json()
    })
    .then( json => saveLocalStorage(json.data.token))
    .catch((error) => {
      manageError(error.message);
    })
}
  
  function manageError(error){
    seterrorMessage(error)
   setloginError(true)
  
  }

  function saveLocalStorage(token){
    localStorage.setItem("Token", token );
    window.location.replace("http://localhost:3000/dashboard")
  }

  return (
    <div className="Login">
      <div className="my-2" style={{ width: '80px' }}><img src={logo} /></div>
      <div className="col-12">
        {
          loginError ? <AlertLogin message={errorMessage} /> : null
        }
      </div>
      <div className="row align-items-center">
        <div className="right-aside col-12 col-sm-6">
          <img src={imageLogin} />
        </div>

        <Form className="login-form col-12 col-sm-6 p-2">
          <h1>Enroll. Empower. Educate.</h1>
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input type="email" name="email" id="exampleEmail" placeholder="john@neoeducate.com" onChange={onChangeHandler}/>
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input type="password" name="password" id="examplePassword" placeholder="any password" onChange={onChangeHandler} />
          </FormGroup>
          <NewButton clickHandler={sendLoginInfo} />
        </Form>
      </div>
    </div>
      
  )
}
