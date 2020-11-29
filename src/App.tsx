import React from 'react';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import ProfileComponent from "./components/Profile/ProfileComponent";
import Dialogs from "./components/Dialogs/Dialogs";
import s from './App.module.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import StoreContext from './StoreContext'

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
                        <Route path='/profile' exact render={() => <ProfileComponent
                        />}/>
                        <Route path='/dialogs/:id?' exact render={() =>
                            <StoreContext.Consumer>
                                {
                                    (store) => {
                                        return (
                                            <Dialogs

                                                dispatch={store.dispatch}/>
                                        )
                                    }
                                }
                            </StoreContext.Consumer>
                        }/>
                    </Switch>
                </div>
            </div>
        </Router>


    );
}

export default App;
