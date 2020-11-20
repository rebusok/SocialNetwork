import React, {useState} from 'react';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import ProfileComponent from "./components/Profile/ProfileComponent";
import Dialogs from "./components/Dialogs/Dialogs";

import s from './App.module.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { RootStateType, addPostActionCreator, addMessageActionCreator } from "./redux/state";

type  AppType = {
    dispatch: (action:any) => any
    state:  RootStateType
}



const App = (props:AppType) => {
    const {dispatch, state:{dialogPage:{dialogs, messages}, profilePage:{posts}}} = props;
       
    const [postsJ, setPost] = useState(posts);
    const [messageDialog, setMessageDialog] = useState(messages);
       
    
    
    const collBackAddPost = (value:string) => setPost(dispatch(addPostActionCreator(value)));
    const collBackAddMessage = (mes:string) => setMessageDialog(dispatch(addMessageActionCreator(mes)))
    
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
                        posts={postsJ}
                        addPost={collBackAddPost}/>}/>
                    <Route path='/dialogs/:id?' exact  render ={() => <Dialogs
                    dialogs={dialogs}
                    messages={messageDialog}
                    addMessage={collBackAddMessage}/>}/>
                    </Switch>
                </div>
            </div>
        </Router>


    );
}

export default App;
