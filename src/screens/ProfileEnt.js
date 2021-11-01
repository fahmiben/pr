import React from "react";
import {useSelector , useDispatch} from "react-redux";
import { Card, Button, Nav} from "react-bootstrap";
import { logout } from "../Js/userSlice/userSlice";
import { useHistory } from "react-router-dom";


const ProfileEnt = () => {
    const user = useSelector((state) => state.user.user);
    console.log(user);
    const history = useHistory();
    const dispatch = useDispatch();
    const handleLogout=()=>{
        dispatch(logout())
        history.push("/login")
    }
    return (
   <div>
         <Nav variant="tabs" defaultActiveKey="/home">
  <Nav.Item>
    <Nav.Link href="/home">Produits</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-1">Stages</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    
  </Nav.Item>
</Nav>

<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Nom du Produit</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    
    <Button>Ajouter Produit</Button>
<Button>Modifier Produit</Button>
<Button>Supprimer Produit</Button>
  </Card.Body>
</Card>


    </div>
    )
}

export default ProfileEnt;
