import React, { useState } from 'react';
import {Form , Button} from 'react-bootstrap';
import {useDispatch} from 'react-redux';
import { loginUser } from '../Js/userSlice/userSlice';
import { Link , useHistory} from 'react-router-dom';

const Login = () => {
  const [login, setlogin] = useState({
    email:"",
    password:"",
});

const history = useHistory();

const dispatch = useDispatch();
const handleLogin=(e)=>{
  e.preventDefault();

  dispatch(loginUser(login));
  setTimeout(()=>{
    history.push("/profile");
  },1000);
  
};
    return (
    <div className="form-screen">
    <Form>
     <h1> Connexion </h1>
     <Form.Group className="mb-3" >
    <Form.Label>Adresse email</Form.Label>
    <Form.Control type="email" placeholder="Entrer l'adresse email" 
     onChange={(e)=>setlogin({...login,email:e.target.value})}/>
  </Form.Group>

  <Form.Group className="mb-3" >
    <Form.Label>Mot de passe </Form.Label>
    <Form.Control type="password" placeholder="mot de passe" 
     onChange={(e)=>setlogin({...login,password:e.target.value})}/>
  </Form.Group>

  
  <Button onClick={handleLogin}>Se connecter</Button>
  <h4>
      Vous n'avez pas un compte 
  <Link to='/Register'> Créer un compte </Link>
  </h4>
</Form> 
        </div>
    )
}

export default Login;
