import React from 'react';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import ProfileComponent from "./components/Profile/ProfileComponent";
import Dialogs from "./components/Dialogs/Dialogs";

import s from './App.module.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {addPostActionCreator} from './redux/profileReducer';
import {addMessageActionCreator} from './redux/dialogReducer';
import {AppStateType} from './redux/reduxStore';



type  AppType = {
    dispatch: (action:any) => any
    state:  AppStateType
    store: any
}



const App = (props:AppType) => {
    
    const { dispatch,
                state:{
                    dialogReducer: { dialogs, messages },
                    profileReducer: { posts }
                    }
         } = props;
     
    
    
        
        
    
    const collBackAddPost = (value:string) => dispatch(addPostActionCreator(value));
    const collBackAddMessage = (mes:string) => dispatch(addMessageActionCreator(mes));
    
    return (

        <Router>

            <div className={s.app_wrapper}>
                <Header/>
                <Navbar/>
                <div className={s.content}>
                    <Switch>
                    <Route path='/'
                           render={() => <h2>Welcom to Soc</h2>}
                           exact />
                    <Route path='/profile' exact render={() => <ProfileComponent
                        posts={posts}
                        addPost={collBackAddPost}/>}/>
                    <Route path='/dialogs/:id?' exact  render ={() => <Dialogs
                    dialogs={dialogs}
                    messages={messages}
                    addMessage={collBackAddMessage}/>}/>
                    </Switch>
                </div>
            </div>
        </Router>


    );
}

export default App;
