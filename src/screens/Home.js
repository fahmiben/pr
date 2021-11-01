import React from 'react';
import {Link} from 'react-router-dom';
import {Button} from 'react-bootstrap';

const Home = () => {
    return (
        <div>
            <h1>
                Bienvenue 
            </h1>
            <h1>
                sur l'Espace Client Entreprise
            </h1>
            <Button className="but-home"> <Link to='/Register'> Créer un compte </Link> </Button>
            <Button><Link to='/Login'> Se connecter </Link> </Button>
        </div>
    )
}

export default Home;