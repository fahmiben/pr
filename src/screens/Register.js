import React, { useState } from 'react';
import { Form , Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {registerUser} from '../Js/userSlice/userSlice';
const Register = () => {
    const [register, setregister] = useState({
        name:"",
        lastname:"",
        email:"",
        password:"",
        phone:"",
        adress:"",
        userType:""
    });

    const dispatch = useDispatch();
    const handleRegister=(e)=>{
        e.preventDefault();

        dispatch(registerUser(register));
    };
    return (
        <div className="form-screen">
            <Form>
                <h1> Créer un compte </h1>
                <Form.Group className="mb-3" >
    <Form.Label>Nom</Form.Label>
    <Form.Control type="text" placeholder="Entrer votre nom" 
    onChange={(e)=>setregister({...register,name:e.target.value})} />
  </Form.Group>

  <Form.Group className="mb-3" >
    <Form.Label>Prénom</Form.Label>
    <Form.Control type="text" placeholder="Entrer votre prénom" 
    onChange={(e)=>setregister({...register,lastname:e.target.value})} />
  </Form.Group>

  <Form.Group className="mb-3" >
    <Form.Label>Adresse email</Form.Label>
    <Form.Control type="email" placeholder="Entrer l'adress email" 
     onChange={(e)=>setregister({...register,email:e.target.value})}/>
  </Form.Group>

  <Form.Group className="mb-3" >
    <Form.Label>Mot de passe </Form.Label>
    <Form.Control type="password" placeholder="Entrer un mot de passe" 
     onChange={(e)=>setregister({...register,password:e.target.value})}/>
  </Form.Group>

  <Form.Group className="mb-3" >
    <Form.Label>Numéro de téléphone</Form.Label>
    <Form.Control type="phone" placeholder="Entrer votre numéro de téléphone" 
     onChange={(e)=>setregister({...register,phone:e.target.value})}/>
  </Form.Group>

  <Form.Group className="mb-3" >
    <Form.Label>Adresse</Form.Label>
    <Form.Control type="adress" placeholder="Entrer votre adresse" 
     onChange={(e)=>setregister({...register,adress:e.target.value})}/>
  </Form.Group>

<input type="radio" name="r" onChange={()=>{setregister({...register,userType:"entreprise"})}}/>entreprise
<input type="radio" name="r" onChange={()=>{setregister({...register,userType:"normal"})}}/>Client

  
  <Button onClick={handleRegister}>Créer un compte</Button>
  <h4>
      Vous avez un compte
  <Link to='/login'> Se connecter </Link>
  </h4>
</Form> 
        </div>
    )
}

export default Register;
