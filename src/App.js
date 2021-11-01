import './App.css';
import Login from './screens/Login';
import { Switch , Route } from 'react-router-dom';
import Register from './screens/Register';
import Home from './screens/Home';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { currentUser } from './Js/userSlice/userSlice';
import PrivateRoute from './routes/PrivateRoute';
import ProfileEnt from './screens/ProfileEnt';
import ProfileCl from './screens/ProfileCl';

import Header from './screens/Header';

function App() {
  const dispatch = useDispatch();
  const isAuth=localStorage.getItem("token");
  useEffect(() => {
    if (isAuth){
      dispatch(currentUser());
    }
  },[]);
  return (
    <div className="App">
      <Header/>
     <Switch>
     <Route exact path='/' component={Home} />
       <Route path='/login' component={Login} />
       <Route path='/register' component={Register} />
       <Route path='/register' component={Register} />

       <Route path="/profe" component={ProfileEnt}/>
       <Route path="/profc" component={ProfileCl}/>

     </Switch>
    </div>
  );
}

export default App;
