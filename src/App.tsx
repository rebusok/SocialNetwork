import React from 'react';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import s from './App.module.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import DialogContainer from "./components/Dialogs/DialogsContainer";
import ProfileComponentContainer from "./components/Profile/ProfileComponentContainer";
import Users from "./components/Users/Users";


const App = () => {

    return (

        <Router>
            <div className={s.app_wrapper}>
                <Header/>
                <Navbar/>
                <div className={s.content}>
                    <Switch>
                        <Route path='/'
                               render={() => <h2>Welcome to Soc</h2>}
                               exact/>
                        <Route path='/profile' exact render={() => <ProfileComponentContainer
                        />}/>
                        <Route path='/dialogs/:id?' exact render={() =>
                            <DialogContainer/>
                        }/>
                        <Route path='/users' exact render={() =>
                            <Users/>
                        }/>
                    </Switch>
                </div>
            </div>
        </Router>


    );
}

export default App;
