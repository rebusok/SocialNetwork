import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import s from './App.module.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import DialogContainer from "./components/Dialogs/DialogsContainer";
import ProfileComponentContainer from "./components/Profile/ProfileComponentContainer";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";


const App = () => {

    return (

        <Router>
            <div className={s.app_wrapper}>
                <HeaderContainer/>
                <Navbar/>
                <div className={s.content}>
                    <Switch>
                        <Route path='/'
                               render={() => <h2>Welcome to Soc</h2>}
                               exact/>
                        <Route path='/profile/:userId?'  render={() => <ProfileComponentContainer
                        />}/>
                        <Route path='/dialogs/:id?' exact render={() =>
                            <DialogContainer/>
                        }/>
                        <Route path='/users' exact render={() =>
                            <UsersContainer/>
                        }/>
                    </Switch>
                </div>
            </div>
        </Router>


    );
}

export default App;
